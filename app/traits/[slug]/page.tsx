"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { traitDetails } from "@/lib/traitDetails";
import type { Trait } from "@/lib/traitDetails";

const traitImageMap: Record<string, string> = {
  O: "trait-o.webp",
  C: "trait-c.webp",
  E: "trait-e.webp",
  A: "trait-a.webp",
  N: "trait-n.webp",
};

function TraitHeroImage({ trait, icon, color }: { trait: string; icon: string; color: string }) {
  const [failed, setFailed] = useState(false);
  const src = `/images/${traitImageMap[trait] || "trait-o.webp"}`;

  if (failed) {
    return (
      <div style={{
        width: "100%", maxWidth: 440, height: 260, borderRadius: 20,
        margin: "0 auto 20px",
        background: `linear-gradient(135deg, ${color}33, ${color}66)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 80 }}>{icon}</span>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 440, height: 260, borderRadius: 20, overflow: "hidden", margin: "0 auto 20px" }}>
      <Image
        src={src}
        alt={trait}
        fill
        style={{ objectFit: "cover" }}
        unoptimized
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}

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

      <div style={{ background: t.color, padding: "32px 16px 48px", textAlign: "center" }}>
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

          <TraitHeroImage trait={t.trait} icon={t.icon} color={t.color} />

          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            OCEAN Trait — {t.trait}
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "white", marginBottom: 6 }}>{t.name.en}</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{t.tagline.en}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.8, marginBottom: 16 }}>{t.description.en}</p>
          <p style={{ fontSize: 14, color: "#4a7a9b", lineHeight: 1.8 }}>{t.deepDescription.en}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12 }}>Strengths</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.strengths.en.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: t.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5 }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#c0546e", marginBottom: 12 }}>Weaknesses</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {t.weaknesses.en.map((w, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: "#c0546e", fontWeight: 700, flexShrink: 0 }}>!</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5 }}>{w}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>Top Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {t.skills.en.map((s) => (
              <span key={s} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: t.lightColor, color: t.color, border: `1px solid ${t.color}33`, fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>Best Career Paths</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {t.jobs.en.map((j) => (
              <span key={j} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
            ))}
          </div>
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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12 }}>In Relationships</h2>
            <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.7 }}>{t.inRelationships.en}</p>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12 }}>In the Workplace</h2>
            <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.7 }}>{t.inWorkplace.en}</p>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>Growth Tips</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.growthTips.en.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.6 }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 8 }}>Compatible Traits</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7 }}>{t.compatibleTraits.en}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/info"><button className="btn-primary">Take the Quiz →</button></Link>
          <Link href="/"><button className="btn-secondary">← All Personalities</button></Link>
        </div>
      </div>
    </main>
  );
}