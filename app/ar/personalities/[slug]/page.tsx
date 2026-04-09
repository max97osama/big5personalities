"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { personalityDetails } from "@/lib/personalityDetails";
import { traitDetails } from "@/lib/traitDetails";
import type { Trait } from "@/lib/traitDetails";

export default function ArabicPersonalityPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const p = Object.values(personalityDetails).find((x) => x.slug === slug);

  if (!p) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a7a9b", marginBottom: 16 }}>الشخصية غير موجودة.</p>
          <Link href="/ar"><button className="btn-primary" style={{ maxWidth: 200 }}>الصفحة الرئيسية</button></Link>
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
            <Link href={`/personalities/${p.slug}`}>
              <button style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                English
              </button>
            </Link>
            <button onClick={() => router.back()}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              رجوع →
            </button>
          </div>
          <div style={{ fontSize: 56, marginBottom: 12 }}>{p.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            {p.combinedKey} النوع المدمج
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "white", marginBottom: 6 }}>{p.title.ar}</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{p.tagline.ar}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.9, marginBottom: 16, textAlign: "right" }}>{p.summary.ar}</p>
          <p style={{ fontSize: 14, color: "#4a7a9b", lineHeight: 1.9, textAlign: "right" }}>{p.deepDescription.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 14, textAlign: "right" }}>السمات الاساسية</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.coreTraits.ar.map((ct) => (
              <span key={ct} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: p.lightColor, color: p.color, border: `1px solid ${p.color}33`, fontWeight: 600 }}>{ct}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>نقاط القوة</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.strengths.ar.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <span style={{ color: p.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5, textAlign: "right" }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#c0546e", marginBottom: 12, textAlign: "right" }}>التحديات</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.challenges.ar.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <span style={{ color: "#c0546e", fontWeight: 700, flexShrink: 0 }}>!</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5, textAlign: "right" }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>افضل المسارات المهنية</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.jobs.ar.map((j) => (
              <span key={j} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>امثلة مشهورة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {p.famousExamples.ar.map((f, i) => (
              <div key={i} style={{ fontSize: 14, color: "#2d4a5e", padding: "10px 14px", background: p.lightColor, borderRadius: 10, borderRight: `3px solid ${p.color}`, textAlign: "right" }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>في العلاقات</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.9, textAlign: "right" }}>{p.inRelationships.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>نصائح للنمو</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {p.growthTips.ar.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7, textAlign: "right" }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>الشخصيات المتوافقة</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.compatiblePersonalities.ar.map((cp) => {
              const cpSlug = cp.match(/\(([^)]+)\)/)?.[1];
              const cpData = cpSlug ? Object.values(personalityDetails).find(x => x.combinedKey === cpSlug) : null;
              return (
                <Link key={cp} href={cpData ? `/ar/personalities/${cpData.slug}` : "#"} style={{ textDecoration: "none" }}>
                  <span style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: cpData?.lightColor || "#f0f7fd", color: cpData?.color || "#2d4a5e", border: `1px solid ${cpData?.color || "#c8dff0"}44`, fontWeight: 600, cursor: "pointer" }}>{cp}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>سماتك الاساسية</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {traits.map((t) => t && (
              <Link key={t.trait} href={`/ar/traits/${t.slug}`} style={{ textDecoration: "none", flex: 1, minWidth: 140 }}>
                <div style={{ background: t.lightColor, border: `2px solid ${t.color}33`, borderRadius: 12, padding: "14px 16px", cursor: "pointer", textAlign: "right" }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{t.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: t.color }}>{t.name.ar}</div>
                  <div style={{ fontSize: 11, color: "#6b8fa8" }}>{t.tagline.ar}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/ar/info"><button className="btn-primary">ابدا الاختبار ←</button></Link>
          <Link href="/ar"><button className="btn-secondary">→ كل الشخصيات</button></Link>
        </div>
      </div>
    </main>
  );
}
