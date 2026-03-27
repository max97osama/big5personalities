"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { traitInfo, Trait } from "@/lib/questions";
import type { PersonalityResult } from "@/lib/scoring";

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    if (!stored) { router.push("/"); return; }
    setResult(JSON.parse(stored));
  }, []);

  if (!result) return (
    <div className="min-h-screen flex items-center justify-center">
      <p style={{ color: "#64748b" }}>Loading your results...</p>
    </div>
  );

  return (
    <main className="min-h-screen px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>
      <div className="max-w-2xl mx-auto">

        <div className="card text-center mb-6">
          <div className="text-5xl mb-4">🎉</div>
          <p className="text-sm font-semibold mb-1" style={{ color: "#4f46e5" }}>
            YOUR PERSONALITY TYPE
          </p>
          <h1 className="text-3xl font-bold mb-4" style={{ color: "#1e293b" }}>
            {result.personalityTitle.en}
          </h1>
          <p className="text-base" style={{ color: "#64748b", lineHeight: "1.8" }}>
            {result.summary.en}
          </p>
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-bold mb-6" style={{ color: "#1e293b" }}>
            Your Trait Breakdown
          </h2>
          {result.scores.map((s) => {
            const info = traitInfo[s.trait as Trait];
            return (
              <div key={s.trait} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-bold" style={{ color: info.color }}>
                      {info.name.en}
                    </span>
                    <span className="text-xs ml-2 px-2 py-0.5 rounded-full text-white"
                          style={{ background: info.color }}>
                      {s.level}
                    </span>
                  </div>
                  <span className="font-bold text-sm" style={{ color: info.color }}>
                    {s.score}/50 ({s.percent}%)
                  </span>
                </div>
                <div className="trait-bar">
                  <div className="trait-bar-fill"
                       style={{ width: `${s.percent}%`, background: info.color }} />
                </div>
                <p className="text-xs mt-1" style={{ color: "#94a3b8" }}>
                  {info.description.en}
                </p>
              </div>
            );
          })}
        </div>

        <div className="card mb-6">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1e293b" }}>
            Understanding Your Scores
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { level: "High (65–100%)",  desc: "This trait is strongly present in your personality.",     color: "#10b981" },
              { level: "Medium (35–64%)", desc: "This trait is moderately expressed in your personality.",  color: "#f59e0b" },
              { level: "Low (0–34%)",     desc: "This trait is less dominant in your personality.",         color: "#ef4444" },
            ].map((item) => (
              <div key={item.level} className="flex items-start gap-3">
                <span className="text-xs font-bold px-2 py-1 rounded text-white mt-0.5"
                      style={{ background: item.color, whiteSpace: "nowrap" }}>
                  {item.level}
                </span>
                <p className="text-sm" style={{ color: "#64748b" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/info">
            <button className="btn-primary">🔄 Retake the Quiz</button>
          </Link>
          <Link href="/ar/info">
            <button className="btn-secondary w-full">
              🌐 Take Quiz in Arabic — اللغة العربية
            </button>
          </Link>
          <Link href="/">
            <button className="btn-secondary w-full">← Back to Home</button>
          </Link>
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "#94a3b8" }}>
          Based on the scientifically validated Big Five (OCEAN) personality model
        </p>
      </div>
    </main>
  );
}
