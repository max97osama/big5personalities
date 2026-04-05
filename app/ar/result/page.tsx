"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Trait } from "@/lib/questions";
import { traitInfo } from "@/lib/traits";
import type { PersonalityResult } from "@/lib/scoring";

function getCombinedImageName(combinedKey: string): string {
  const parts = combinedKey.split("+");
  return `trait-${parts[0].toLowerCase()}_${parts[1].toLowerCase()}`;
}

export default function ArabicResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    if (!stored) { router.push("/ar"); return; }
    setResult(JSON.parse(stored));
  }, []);

  if (!result) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#5b8db8" }}>جاري تحميل نتائجك...</p>
    </div>
  );

  const dominant = traitInfo[result.dominantTrait as Trait];
  const second = traitInfo[result.secondTrait as Trait];
  const combinedImgName = getCombinedImageName(result.combinedKey);

  return (
    <main style={{ background: "linear-gradient(160deg, #e8f4fd 0%, #d6eaf8 40%, #e8f8f5 100%)", minHeight: "100vh", padding: "24px 0" }}>
      <div className="result-layout">

        <div className="ad-space-side">Ad</div>

        <div className="result-main">

          <div className="ad-space-top">اعلان</div>

          <div className="card" style={{ textAlign: "center", marginBottom: 16 }}>

            <div style={{ position: "relative", width: "100%", height: 220, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
              <Image
                src={`/images/${combinedImgName}.webp`}
                alt={result.personalityTitle.ar}
                fill
                style={{ objectFit: "cover" }}
                onError={(e: any) => { e.target.style.display = "none"; }}
              />
            </div>

            <div className="combined-badge">
              {result.dominantTrait} + {result.secondTrait} — النوع المدمج
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0f2942", marginBottom: 12 }}>
              {result.personalityTitle.ar}
            </h1>
            <p style={{ fontSize: 15, color: "#5b8db8", lineHeight: 1.9, marginBottom: 20 }}>
              {result.summary.ar}
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: dominant.color, color: "white", fontWeight: 700 }}>
                الاساسية: {dominant.name.ar}
              </span>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: second.color, color: "white", fontWeight: 700 }}>
                الثانوية: {second.name.ar}
              </span>
            </div>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f2942", marginBottom: 20 }}>
              تفاصيل سماتك الشخصية
            </h2>
            {result.scores.map((s) => {
              const info = traitInfo[s.trait as Trait];
              return (
                <div key={s.trait} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: 13, color: info.color }}>
                      {s.score}/50 ({s.percent}%)
                    </span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: info.color, color: "white" }}>
                        {s.levelAr}
                      </span>
                      <span style={{ fontWeight: 700, color: info.color }}>{info.name.ar}</span>
                    </div>
                  </div>
                  <div className="trait-bar">
                    <div className="trait-bar-fill" style={{ width: `${s.percent}%`, background: info.color }} />
                  </div>
                  <p style={{ fontSize: 12, color: "#8ab4d4", marginTop: 4, textAlign: "right" }}>{info.description.ar}</p>
                </div>
              );
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 16 }}>
            {[result.dominantTrait, result.secondTrait].map((t) => {
              const info = traitInfo[t as Trait];
              return (
                <div key={t} className="trait-detail-card">
                  <div style={{ position: "relative", width: "100%", height: 180, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
                    <Image
                      src={`/images/trait-${t.toLowerCase()}.webp`}
                      alt={info.name.ar}
                      fill
                      style={{ objectFit: "cover" }}
                      onError={(e: any) => { e.target.style.display = "none"; }}
                    />
                  </div>

                  <h3 style={{ fontSize: 16, fontWeight: 800, color: info.color, marginBottom: 12 }}>
                    {info.name.ar}
                  </h3>

                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0f2942", marginBottom: 6 }}>المهارات الرئيسية</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {info.skills.ar.map((s) => (
                        <span key={s} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#eaf5fd", color: "#1a7abf", border: "1px solid #cce3f5" }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0f2942", marginBottom: 6 }}>افضل المسارات المهنية</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {info.jobs.ar.map((j) => (
                        <span key={j} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#e8f8f5", color: "#0e9b8a", border: "1px solid #b3e8df" }}>
                          {j}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 12, color: "#5b8db8", textAlign: "right" }}>
                      <span style={{ fontWeight: 700, color: "#0f2942" }}>افضل الاصدقاء: </span>
                      {info.friendTraits.ar}
                    </p>
                    <p style={{ fontSize: 12, color: "#5b8db8", textAlign: "right" }}>
                      <span style={{ fontWeight: 700, color: "#0f2942" }}>الشريك المثالي: </span>
                      {info.partnerTrait.ar}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0f2942", marginBottom: 16 }}>
              فهم نتائجك
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { level: "مرتفع (65-100%)",  desc: "هذه السمة حاضرة بقوة في شخصيتك.",      color: "#0e9b8a" },
                { level: "متوسط (35-64%)",   desc: "هذه السمة معتدلة التعبير في شخصيتك.",  color: "#1a7abf" },
                { level: "منخفض (0-34%)",    desc: "هذه السمة اقل هيمنة في شخصيتك.",       color: "#2e6da4" },
              ].map((item) => (
                <div key={item.level} style={{ display: "flex", alignItems: "flex-start", gap: 10, flexDirection: "row-reverse" }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 6, background: item.color, color: "white", whiteSpace: "nowrap", marginTop: 2 }}>
                    {item.level}
                  </span>
                  <p style={{ fontSize: 13, color: "#5b8db8", textAlign: "right" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <Link href="/ar/info">
              <button className="btn-primary">🔄 اعادة الاختبار</button>
            </Link>
            <Link href="/info">
              <button className="btn-secondary">🌐 Take Quiz in English</button>
            </Link>
            <Link href="/ar">
              <button className="btn-secondary">→ العودة للرئيسية</button>
            </Link>
          </div>

          <p style={{ textAlign: "center", fontSize: 11, color: "#8ab4d4", marginBottom: 24 }}>
            مبني على نموذج الشخصية الخمسة الكبرى (OCEAN) المعتمد علميا
          </p>
        </div>

        <div className="ad-space-side">Ad</div>
      </div>
    </main>
  );
}
