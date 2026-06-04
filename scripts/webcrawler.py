#!/usr/bin/env python3
"""
Security Learning Material Crawler
====================================
Crawls the following sites and saves clean article text to .txt files:
  1. https://portswigger.net/web-security/all-materials
  2. https://ippsec.rocks/
  3. https://hacktricks.wiki/en/index.html
  4. https://adsecurity.org/
  5. https://packetstorm.news/

Requirements:
    pip install requests beautifulsoup4 trafilatura lxml

Usage:
    python security_crawler.py

Output:
    Creates a folder called "security_learning/" with one .txt file per site.
"""

import os
import re
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import trafilatura

# ── Config ────────────────────────────────────────────────────────────────────
OUTPUT_DIR = "security_learning"
DELAY = 1.5          # seconds between requests (be polite)
TIMEOUT = 20         # seconds per request
MAX_PAGES = 500      # safety cap per site
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    )
}

session = requests.Session()
session.headers.update(HEADERS)

os.makedirs(OUTPUT_DIR, exist_ok=True)


# ── Helpers ───────────────────────────────────────────────────────────────────

def fetch(url):
    """Fetch a URL and return (response_text, status_code). Returns (None, code) on error."""
    try:
        r = session.get(url, timeout=TIMEOUT)
        r.raise_for_status()
        return r.text, r.status_code
    except requests.RequestException as e:
        print(f"    [!] Failed: {url} — {e}")
        return None, getattr(e.response, "status_code", 0)


def extract_text(html, url):
    """Use trafilatura to extract clean article text from raw HTML."""
    result = trafilatura.extract(
        html,
        url=url,
        include_tables=True,
        include_links=False,
        include_images=False,
        no_fallback=False,
    )
    return result or ""


def slugify(text):
    """Convert a string to a safe filename slug."""
    text = re.sub(r"[^\w\s-]", "", text.lower())
    return re.sub(r"[\s_-]+", "_", text).strip("_")[:80]


def same_domain(url, base):
    return urlparse(url).netloc == urlparse(base).netloc


def collect_links(html, base_url, path_prefix=""):
    """Return all internal links from a page, optionally filtered by path prefix."""
    soup = BeautifulSoup(html, "lxml")
    links = set()
    for a in soup.find_all("a", href=True):
        full = urljoin(base_url, a["href"])
        parsed = urlparse(full)
        # strip fragments and query strings for dedup
        clean = parsed._replace(fragment="", query="").geturl()
        if same_domain(clean, base_url):
            if path_prefix == "" or parsed.path.startswith(path_prefix):
                links.add(clean)
    return links


def write_article(f, url, title, text):
    """Write a single article block to an open file handle."""
    f.write("=" * 80 + "\n")
    f.write(f"URL   : {url}\n")
    f.write(f"TITLE : {title}\n")
    f.write("=" * 80 + "\n\n")
    f.write(text.strip() + "\n\n\n")


def get_title(html):
    soup = BeautifulSoup(html, "lxml")
    if soup.title:
        return soup.title.string.strip() if soup.title.string else "Untitled"
    h1 = soup.find("h1")
    return h1.get_text(strip=True) if h1 else "Untitled"


# ── Site Crawlers ─────────────────────────────────────────────────────────────

def crawl_portswigger():
    """
    PortSwigger Web Security Academy.
    Start from /web-security/all-materials, collect all /web-security/* article links.
    """
    print("\n[1/5] PortSwigger Web Security Academy")
    base = "https://portswigger.net"
    index_url = "https://portswigger.net/web-security/all-materials"
    out_file = os.path.join(OUTPUT_DIR, "01_portswigger.txt")

    html, _ = fetch(index_url)
    if not html:
        print("    [!] Could not fetch index page.")
        return

    # Collect all /web-security/ links from the index
    links = set()
    soup = BeautifulSoup(html, "lxml")
    for a in soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith("/web-security/"):
            full = urljoin(base, href)
            parsed = urlparse(full)
            clean = parsed._replace(fragment="", query="").geturl()
            links.add(clean)

    # Also do a second-level crawl (topic pages link to sub-articles)
    discovered = set(links)
    second_level = set()
    for link in list(links)[:MAX_PAGES]:
        time.sleep(DELAY)
        h, _ = fetch(link)
        if h:
            for a in BeautifulSoup(h, "lxml").find_all("a", href=True):
                href = a["href"]
                if href.startswith("/web-security/"):
                    full = urljoin(base, href)
                    parsed = urlparse(full)
                    clean = parsed._replace(fragment="", query="").geturl()
                    second_level.add(clean)

    all_links = discovered | second_level
    print(f"    Found {len(all_links)} article URLs")

    count = 0
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("PORTSWIGGER WEB SECURITY ACADEMY — LEARNING MATERIALS\n")
        f.write(f"Source: {index_url}\n\n\n")

        for url in sorted(all_links):
            if count >= MAX_PAGES:
                break
            time.sleep(DELAY)
            html, status = fetch(url)
            if not html:
                continue
            text = extract_text(html, url)
            if not text or len(text) < 100:
                continue
            title = get_title(html)
            write_article(f, url, title, text)
            count += 1
            print(f"    [{count}] {title[:70]}")

    print(f"    ✓ Saved {count} articles → {out_file}")


def crawl_ippsec():
    """
    IppSec.rocks — video notes/index for HackTheBox walkthroughs.
    The site is mostly a searchable JS frontend backed by a JSON dataset.
    We fetch the JSON directly and extract all video metadata + tags.
    """
    print("\n[2/5] IppSec.rocks")
    out_file = os.path.join(OUTPUT_DIR, "02_ippsec.txt")

    # IppSec uses a static JSON file for its search index
    json_url = "https://ippsec.rocks/dataset.json"
    try:
        r = session.get(json_url, timeout=TIMEOUT)
        r.raise_for_status()
        data = r.json()
    except Exception as e:
        print(f"    [!] Could not fetch dataset: {e}")
        # Fallback: scrape the HTML page
        html, _ = fetch("https://ippsec.rocks/")
        if not html:
            return
        data = []

    with open(out_file, "w", encoding="utf-8") as f:
        f.write("IPPSEC.ROCKS — HACKTHEBOX VIDEO INDEX\n")
        f.write("Source: https://ippsec.rocks/\n\n\n")

        if isinstance(data, list):
            for i, entry in enumerate(data):
                f.write("=" * 80 + "\n")
                name = entry.get("name", entry.get("title", "Unknown"))
                url = entry.get("url", entry.get("link", "N/A"))
                tags = entry.get("tags", entry.get("chapters", []))
                description = entry.get("description", "")
                timestamp = entry.get("timestamp", "")

                f.write(f"VIDEO : {name}\n")
                f.write(f"URL   : {url}\n")
                if timestamp:
                    f.write(f"TIME  : {timestamp}\n")
                if tags:
                    if isinstance(tags, list):
                        # tags may be list of strings or list of dicts
                        tag_strs = []
                        for t in tags:
                            if isinstance(t, dict):
                                label = t.get("name", t.get("tag", str(t)))
                                ts = t.get("timestamp", "")
                                tag_strs.append(f"{label} @ {ts}" if ts else label)
                            else:
                                tag_strs.append(str(t))
                        f.write(f"TAGS  : {', '.join(tag_strs)}\n")
                if description:
                    f.write(f"DESC  : {description}\n")
                f.write("=" * 80 + "\n\n")
                if i % 50 == 0:
                    print(f"    [{i}] {name[:70]}")

    print(f"    ✓ Saved {len(data) if isinstance(data, list) else '?'} entries → {out_file}")


def crawl_hacktricks():
    """
    HackTricks Wiki — GitBook-based. Crawl all pages under /en/
    """
    print("\n[3/5] HackTricks Wiki")
    base = "https://hacktricks.wiki"
    start = "https://hacktricks.wiki/en/index.html"
    out_file = os.path.join(OUTPUT_DIR, "03_hacktricks.txt")

    html, _ = fetch(start)
    if not html:
        print("    [!] Could not fetch index.")
        return

    # Collect seed links from the sidebar/index
    visited = set()
    queue = list(collect_links(html, base, path_prefix="/en/"))
    visited.add(start)
    print(f"    Seed links: {len(queue)}")

    count = 0
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("HACKTRICKS WIKI — PENETRATION TESTING KNOWLEDGE BASE\n")
        f.write(f"Source: {start}\n\n\n")

        while queue and count < MAX_PAGES:
            url = queue.pop(0)
            if url in visited:
                continue
            visited.add(url)
            time.sleep(DELAY)

            html, _ = fetch(url)
            if not html:
                continue

            # Discover more pages from this page's links
            new_links = collect_links(html, base, path_prefix="/en/")
            for link in new_links:
                if link not in visited:
                    queue.append(link)

            text = extract_text(html, url)
            if not text or len(text) < 100:
                continue

            title = get_title(html)
            write_article(f, url, title, text)
            count += 1
            print(f"    [{count}] {title[:70]}")

    print(f"    ✓ Saved {count} articles → {out_file}")


def crawl_adsecurity():
    """
    ADSecurity.org — Active Directory & Kerberos security blog.
    Crawl all posts.
    """
    print("\n[4/5] ADSecurity.org")
    base = "https://adsecurity.org"
    out_file = os.path.join(OUTPUT_DIR, "04_adsecurity.txt")

    # WordPress sites expose all posts via /?page=N
    visited = set()
    all_post_links = set()

    # Crawl paginated archive
    page = 1
    while True:
        url = f"{base}/?paged={page}" if page > 1 else base
        html, status = fetch(url)
        if not html or status == 404:
            break
        soup = BeautifulSoup(html, "lxml")
        # WordPress article links are in <h2 class="entry-title"> or similar
        posts = soup.select("h1.entry-title a, h2.entry-title a, .post-title a, article h2 a")
        if not posts:
            # Also try generic approach
            posts = soup.select("a[rel='bookmark']")
        if not posts:
            break
        for a in posts:
            link = urljoin(base, a["href"])
            all_post_links.add(link)
        print(f"    Archive page {page}: {len(posts)} posts found (total {len(all_post_links)})")
        page += 1
        time.sleep(DELAY)
        if page > 30:  # safety cap
            break

    print(f"    Total post URLs: {len(all_post_links)}")
    count = 0
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("ADSECURITY.ORG — ACTIVE DIRECTORY SECURITY RESEARCH\n")
        f.write(f"Source: {base}\n\n\n")

        for url in sorted(all_post_links):
            if count >= MAX_PAGES:
                break
            time.sleep(DELAY)
            html, _ = fetch(url)
            if not html:
                continue
            text = extract_text(html, url)
            if not text or len(text) < 100:
                continue
            title = get_title(html)
            write_article(f, url, title, text)
            count += 1
            print(f"    [{count}] {title[:70]}")

    print(f"    ✓ Saved {count} articles → {out_file}")


def crawl_packetstorm():
    """
    PacketStorm News — security news and advisories.
    Crawl news articles from the main news section.
    """
    print("\n[5/5] PacketStorm News")
    base = "https://packetstorm.news"
    out_file = os.path.join(OUTPUT_DIR, "05_packetstorm.txt")

    all_article_links = set()

    # Paginated news index
    for page in range(1, 20):  # first 20 pages
        url = f"{base}/news/" if page == 1 else f"{base}/news/page/{page}/"
        html, status = fetch(url)
        if not html or status == 404:
            break
        soup = BeautifulSoup(html, "lxml")
        for a in soup.find_all("a", href=True):
            href = a["href"]
            # Article URLs look like /news/view/NNNNN/...
            if re.match(r"^/news/view/\d+/", href):
                all_article_links.add(urljoin(base, href))
        print(f"    News page {page}: total {len(all_article_links)} links")
        time.sleep(DELAY)

    print(f"    Total article URLs: {len(all_article_links)}")
    count = 0
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("PACKETSTORM NEWS — SECURITY NEWS & ADVISORIES\n")
        f.write(f"Source: {base}\n\n\n")

        for url in sorted(all_article_links):
            if count >= MAX_PAGES:
                break
            time.sleep(DELAY)
            html, _ = fetch(url)
            if not html:
                continue
            text = extract_text(html, url)
            if not text or len(text) < 80:
                continue
            title = get_title(html)
            write_article(f, url, title, text)
            count += 1
            print(f"    [{count}] {title[:70]}")

    print(f"    ✓ Saved {count} articles → {out_file}")


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("  Security Learning Material Crawler")
    print(f"  Output folder: {os.path.abspath(OUTPUT_DIR)}/")
    print("=" * 60)

    crawl_portswigger()
    crawl_ippsec()
    crawl_hacktricks()
    crawl_adsecurity()
    crawl_packetstorm()

    print("\n" + "=" * 60)
    print("  All done! Files saved:")
    for f in sorted(os.listdir(OUTPUT_DIR)):
        path = os.path.join(OUTPUT_DIR, f)
        size_mb = os.path.getsize(path) / (1024 * 1024)
        print(f"    {f}  ({size_mb:.1f} MB)")
    print("=" * 60)


if __name__ == "__main__":
    main()