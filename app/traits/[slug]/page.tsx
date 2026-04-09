"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { traitDetails } from "@/lib/traitDetails";

export default function TraitPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const t = Object.values(traitDetails).find((x) => x.slug === slug);

  if (!t) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a7a9b", marginBottom: 16 }}>Trait not found.</p>
          <Link href="/"><button className="btn-primary" style={{ maxWidth: 200 }}>Go Home</button></Link>
        </div>
      </div>
    );
  }

  return (
    <main style={{ background: `linear-gradient(160deg, ${t.lightColor} 0%, #f0f7fd 100%)`, minHeight: "100vh", padding: "0 0 48px" }}>

      <div style={{ background: t.color, padding: "32px 16px 48px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <button onClick={() => router.back()}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              ← Back
            </button>
            <Link href={`/ar/traits/${t.slug}`}>
              <button style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                العربية
              </button>
            </Link>
          </div>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{t.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            Trait {t.trait} — Big Five OCEAN Model
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "white", marginBottom: 8 }}>{t.name.en}</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 0 }}>{t.tagline.en}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>What is {t.name.en}?</h2>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.8 }}>{t.deepDescription.en}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 16 }}>Core Strengths</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.strengths.en.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: t.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.6 }}>{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 16 }}>Potential Challenges</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.weaknesses.en.map((w, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#f0f7fd", color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, border: `2px solid ${t.color}` }}>!</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.6 }}>{w}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12 }}>Key Skills</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.skills.en.map((s) => (
                <span key={s} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: t.lightColor, color: t.color, border: `1px solid ${t.color}33`, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12 }}>Best Careers</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.jobs.en.map((j) => (
                <span key={j} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>In Relationships</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.8 }}>{t.inRelationships.en}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>In the Workplace</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.8 }}>{t.inWorkplace.en}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>Famous Examples</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.famousExamples.en.map((f, i) => (
              <div key={i} style={{ fontSize: 14, color: "#2d4a5e", padding: "10px 14px", background: t.lightColor, borderRadius: 10, borderLeft: `3px solid ${t.color}` }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>Growth Tips</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.growthTips.en.map((tip, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.6 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24, background: t.lightColor, border: `1px solid ${t.color}33` }}>
          <p style={{ fontSize: 13, color: t.color, fontWeight: 600, marginBottom: 4 }}>Compatible With</p>
          <p style={{ fontSize: 14, color: "#2d4a5e" }}>{t.compatibleTraits.en}</p>
          <p style={{ fontSize: 13, color: "#6b8fa8", marginTop: 8 }}>{t.percentage.en}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/info"><button className="btn-primary">Take the Quiz →</button></Link>
          <Link href="/"><button className="btn-secondary">← All Traits & Personalities</button></Link>
        </div>
      </div>
    </main>
  );
}
