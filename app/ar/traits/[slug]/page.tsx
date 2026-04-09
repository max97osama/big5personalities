"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { traitDetails } from "@/lib/traitDetails";

export default function ArabicTraitPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const t = Object.values(traitDetails).find((x) => x.slug === slug);

  if (!t) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a7a9b", marginBottom: 16 }}>السمة غير موجودة.</p>
          <Link href="/ar"><button className="btn-primary" style={{ maxWidth: 200 }}>الصفحة الرئيسية</button></Link>
        </div>
      </div>
    );
  }

  return (
    <main style={{ background: `linear-gradient(160deg, ${t.lightColor} 0%, #f0f7fd 100%)`, minHeight: "100vh", padding: "0 0 48px" }}>

      <div style={{ background: t.color, padding: "32px 16px 48px", textAlign: "center", position: "relative" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <Link href={`/traits/${t.slug}`}>
              <button style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                English
              </button>
            </Link>
            <button onClick={() => router.back()}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              رجوع →
            </button>
          </div>
          <div style={{ fontSize: 56, marginBottom: 16 }}>{t.icon}</div>
          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            السمة {t.trait} — نموذج الخمسة الكبار
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: "white", marginBottom: 8 }}>{t.name.ar}</h1>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 0 }}>{t.tagline.ar}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12 }}>ما هو {t.name.ar}؟</h2>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.9, textAlign: "right" }}>{t.deepDescription.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 16, textAlign: "right" }}>نقاط القوة الاساسية</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.strengths.ar.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, flexDirection: "row-reverse" }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: t.color, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>✓</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7, textAlign: "right" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 16, textAlign: "right" }}>التحديات المحتملة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.weaknesses.ar.map((w, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, flexDirection: "row-reverse" }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "#f0f7fd", color: t.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, border: `2px solid ${t.color}` }}>!</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7, textAlign: "right" }}>{w}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>المهارات الرئيسية</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
              {t.skills.ar.map((s) => (
                <span key={s} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: t.lightColor, color: t.color, border: `1px solid ${t.color}33`, fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>افضل المسارات المهنية</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
              {t.jobs.ar.map((j) => (
                <span key={j} style={{ fontSize: 12, padding: "4px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>في العلاقات</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.9, textAlign: "right" }}>{t.inRelationships.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>في مكان العمل</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.9, textAlign: "right" }}>{t.inWorkplace.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>امثلة مشهورة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {t.famousExamples.ar.map((f, i) => (
              <div key={i} style={{ fontSize: 14, color: "#2d4a5e", padding: "10px 14px", background: t.lightColor, borderRadius: 10, borderRight: `3px solid ${t.color}`, textAlign: "right" }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: t.color, marginBottom: 12, textAlign: "right" }}>نصائح للنمو</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {t.growthTips.ar.map((tip, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, flexDirection: "row-reverse" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7, textAlign: "right" }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24, background: t.lightColor, border: `1px solid ${t.color}33` }}>
          <p style={{ fontSize: 13, color: t.color, fontWeight: 600, marginBottom: 4, textAlign: "right" }}>التوافق مع</p>
          <p style={{ fontSize: 14, color: "#2d4a5e", textAlign: "right" }}>{t.compatibleTraits.ar}</p>
          <p style={{ fontSize: 13, color: "#6b8fa8", marginTop: 8, textAlign: "right" }}>{t.percentage.ar}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/ar/info"><button className="btn-primary">ابدا الاختبار ←</button></Link>
          <Link href="/ar"><button className="btn-secondary">→ كل السمات والشخصيات</button></Link>
        </div>
      </div>
    </main>
  );
}
