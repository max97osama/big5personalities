"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { personalityDetails } from "@/lib/personalityDetails";
import { traitDetails } from "@/lib/traitDetails";
import type { Trait } from "@/lib/traitDetails";

export default function PersonalityPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const p = Object.values(personalityDetails).find((x) => x.slug === slug);

  if (!p) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a7a9b", marginBottom: 16 }}>Personality not found.</p>
          <Link href="/"><button className="btn-primary" style={{ maxWidth: 200 }}>Go Home</button></Link>
        </div>
      </div>
    );
  }

  const traits = p.combinedKey.split("+").map((k) => traitDetails[k as Trait]);

  return (
    <main style={{ background: `linear-gradient(160deg, ${p.lightColor} 0%, #f0f7fd 100%)`, minHeight: "100vh", padding: "0 0 48px" }}>

      <div style={{ background: p.color, padding: "32px 16px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <button onClick={() => router.back()}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              ← Back
            </button>
            <Link href={`/ar/personalities/${p.slug}`}>
              <button style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                العربية
              </button>
            </Link>
          </div>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{p.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            {p.combinedKey} Combined Type
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "white", marginBottom: 6 }}>{p.title.en}</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{p.tagline.en}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.8, marginBottom: 16 }}>{p.summary.en}</p>
          <p style={{ fontSize: 14, color: "#4a7a9b", lineHeight: 1.8 }}>{p.deepDescription.en}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 14 }}>Core Traits</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.coreTraits.en.map((ct) => (
              <span key={ct} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: p.lightColor, color: p.color, border: `1px solid ${p.color}33`, fontWeight: 600 }}>{ct}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12 }}>Strengths</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.strengths.en.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: p.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#c0546e", marginBottom: 12 }}>Challenges</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.challenges.en.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#c0546e", fontWeight: 700, flexShrink: 0 }}>!</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12 }}>Best Career Paths</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.jobs.en.map((j) => (
              <span key={j} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12 }}>Famous Examples</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {p.famousExamples.en.map((f, i) => (
              <div key={i} style={{ fontSize: 14, color: "#2d4a5e", padding: "10px 14px", background: p.lightColor, borderRadius: 10, borderLeft: `3px solid ${p.color}` }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12 }}>In Relationships</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.8 }}>{p.inRelationships.en}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12 }}>Growth Tips</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {p.growthTips.en.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.6 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12 }}>Compatible Personalities</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.compatiblePersonalities.en.map((cp) => {
              const cpSlug = cp.match(/\(([^)]+)\)/)?.[1];
              const cpData = cpSlug ? Object.values(personalityDetails).find(x => x.combinedKey === cpSlug) : null;
              return (
                <Link key={cp} href={cpData ? `/personalities/${cpData.slug}` : "#"} style={{ textDecoration: "none" }}>
                  <span style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: cpData?.lightColor || "#f0f7fd", color: cpData?.color || "#2d4a5e", border: `1px solid ${cpData?.color || "#c8dff0"}44`, fontWeight: 600, cursor: "pointer" }}>{cp}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12 }}>Your Core Traits</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {traits.map((t) => t && (
              <Link key={t.trait} href={`/traits/${t.slug}`} style={{ textDecoration: "none", flex: 1, minWidth: 140 }}>
                <div style={{ background: t.lightColor, border: `2px solid ${t.color}33`, borderRadius: 12, padding: "14px 16px", cursor: "pointer" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{t.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{t.name.en}</div>
                  <div style={{ fontSize: 11, color: "#6b8fa8" }}>{t.tagline.en}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/info"><button className="btn-primary">Take the Quiz →</button></Link>
          <Link href="/"><button className="btn-secondary">← All Personalities</button></Link>
        </div>
      </div>
    </main>
  );
}
