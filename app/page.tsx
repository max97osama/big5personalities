"use client";
import Link from "next/link";
import { traitDetails } from "@/lib/traitDetails";
import { personalityDetails } from "@/lib/personalityDetails";

export default function Home() {
  const traits = Object.values(traitDetails);
  const personalities = Object.values(personalityDetails);

  return (
    <main style={{ background: "linear-gradient(160deg, #deeef9 0%, #e8f4fb 50%, #f0f7fd 100%)", minHeight: "100vh" }}>

      <div style={{ position: "fixed", top: 16, right: 16, zIndex: 100 }}>
        <Link href="/ar"><button className="lang-btn">العربية</button></Link>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 16px 48px" }}>

        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🧠</div>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: "#0d2137", marginBottom: 10, lineHeight: 1.2 }}>
            Big Five Personalities
          </h1>
          <p style={{ fontSize: 16, color: "#4a7a9b", marginBottom: 28, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 28px" }}>
            Discover your personality through the world's most scientifically validated model.
            Explore the five core traits and ten combined personality types.
          </p>
          <Link href="/info">
            <button className="btn-primary" style={{ maxWidth: 280, margin: "0 auto" }}>
              Take the Quiz →
            </button>
          </Link>
        </div>

        <div style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0d2137", marginBottom: 6 }}>
            The Five Core Traits
          </h2>
          <p style={{ fontSize: 14, color: "#4a7a9b", marginBottom: 24 }}>
            Every personality is made up of these five fundamental dimensions.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
            {traits.map((t) => (
              <Link key={t.trait} href={`/traits/${t.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff", borderRadius: 16,
                  border: `2px solid ${t.color}22`,
                  padding: "20px 16px", textAlign: "center",
                  cursor: "pointer", transition: "all 0.2s",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                  <div style={{ fontSize: 32, marginBottom: 10 }}>{t.icon}</div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, padding: "3px 10px",
                    borderRadius: 20, background: t.color, color: "white",
                    display: "inline-block", marginBottom: 8
                  }}>
                    {t.trait}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.color, marginBottom: 4 }}>
                    {t.name.en}
                  </div>
                  <div style={{ fontSize: 11, color: "#6b8fa8" }}>{t.tagline.en}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 52 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0d2137", marginBottom: 6 }}>
            The Ten Personality Types
          </h2>
          <p style={{ fontSize: 14, color: "#4a7a9b", marginBottom: 24 }}>
            Your unique combination of the two highest traits creates your personality type.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
            {personalities.map((p) => (
              <Link key={p.slug} href={`/personalities/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "#fff", borderRadius: 16,
                  border: `2px solid ${p.color}22`,
                  padding: "20px 16px",
                  cursor: "pointer", transition: "all 0.2s",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)"
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{p.icon}</div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, padding: "2px 8px",
                    borderRadius: 20, background: p.color, color: "white",
                    display: "inline-block", marginBottom: 8
                  }}>
                    {p.combinedKey}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: p.color, marginBottom: 4, lineHeight: 1.3 }}>
                    {p.title.en}
                  </div>
                  <div style={{ fontSize: 11, color: "#6b8fa8" }}>{p.tagline.en}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "32px 0" }}>
          <p style={{ fontSize: 13, color: "#8ab4d4" }}>
            Based on the scientifically validated Big Five (OCEAN) personality model
          </p>
        </div>
      </div>
    </main>
  );
}
