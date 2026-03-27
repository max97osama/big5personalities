"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { traitInfo, Trait } from "@/lib/questions";
import type { PersonalityResult } from "@/lib/scoring";

export default function ArabicResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    if (!stored) { router.push("/ar"); return; }
    setResult(JSON.parse(stored));
  }, []);

  if (!result) return (
    <div className="min-h-screen flex items-center justify-center">
      <p style={{ color: "#64748b" }}>جاري تحميل نتائجك...</p>
    </div>
  );

  return (
    <main className="min-h-screen px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>
      <div className="max-w-2xl mx-auto">

        <div className="card text-center mb-6">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-sm font-semibold mb-1" style={{ color: "#4f46e5" }}>
            نوع شخصيتك
          </p>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#1e293b" }}>
            {result.personalityTitle.ar}
          </h1>
          <p className="text-base" style={{ color: "#64748b", lineHeight: "1.9" }}>
            {result.summary.ar}
          </p>
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1e293b" }}>
            تفاصيل سماتك الشخصية
          </h2>
          {result.scores.map((s) => {
            const info = traitInfo[s.trait as Trait];
            return (
              <div key={s.trait} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-sm" style={{ color: info.color }}>
                    {s.score}/50 ({s.percent}%)
                  </span>
                  <div>
                    <span className="text-xs ml-2 px-2 py-0.5 rounded-full text-white"
                          style={{ background: info.color }}>
                      {s.levelAr}
                    </span>
                    <span className="font-bold mr-2" style={{ color: info.color }}>
                      {info.name.ar}
                    </span>
                  </div>
                </div>
                <div className="trait-bar">
                  <div className="trait-bar-fill"
                       style={{ width: `${s.percent}%`, background: info.color }} />
                </div>
                <p className="text-xs mt-1 text-right" style={{ color: "#94a3b8" }}>
                  {info.description.ar}
                </p>
              </div>
            );
          })}
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1e293b" }}>
            فهم نتائجك
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { level: "مرتفع (٦٥–١٠٠%)", desc: "هذه السمة حاضرة بقوة في شخصيتك.",      color: "#10b981" },
              { level: "متوسط (٣٥–٦٤%)",  desc: "هذه السمة معتدلة التعبير في شخصيتك.",  color: "#f59e0b" },
              { level: "منخفض (٠–٣٤%)",   desc: "هذه السمة أقل هيمنةً في شخصيتك.",      color: "#ef4444" },
            ].map((item) => (
              <div key={item.level} className="flex items-start gap-3 flex-row-reverse">
                <span className="text-xs font-bold px-2 py-1 rounded text-white mt-0.5"
                      style={{ background: item.color, whiteSpace: "nowrap" }}>
                  {item.level}
                </span>
                <p className="text-sm text-right" style={{ color: "#64748b" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/ar/info">
            <button className="btn-primary">🔄 إعادة الاختبار</button>
          </Link>
          <Link href="/info">
            <button className="btn-secondary w-full">🌐 Take Quiz in English</button>
          </Link>
          <Link href="/ar">
            <button className="btn-secondary w-full">→ العودة للرئيسية</button>
          </Link>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#94a3b8" }}>
          مبني على نموذج الشخصية الخمسة الكبرى (OCEAN) المعتمد علمياً
        </p>
      </div>
    </main>
  );
}
