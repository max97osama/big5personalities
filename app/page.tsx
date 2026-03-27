"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>

      <div className="absolute top-4 right-4">
        <Link href="/ar"
          className="text-sm font-semibold px-4 py-2 rounded-full border-2"
          style={{ borderColor: "#4f46e5", color: "#4f46e5" }}>
          العربية
        </Link>
      </div>

      <div className="card max-w-xl w-full text-center">
        <div className="text-6xl mb-6">🧠</div>

        <h1 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
          Discover Your Personality
        </h1>
        <p className="text-base mb-2" style={{ color: "#64748b" }}>
          Based on the scientifically validated
        </p>
        <p className="text-xl font-bold mb-6" style={{ color: "#4f46e5" }}>
          Big Five (OCEAN) Model
        </p>
        <p className="text-sm mb-8" style={{ color: "#64748b", lineHeight: "1.7" }}>
          Answer 50 honest questions and discover your unique personality
          profile across five core traits: Openness, Conscientiousness,
          Extraversion, Agreeableness, and Neuroticism.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { letter: "O", name: "Openness",          color: "#8b5cf6" },
            { letter: "C", name: "Conscientiousness",  color: "#3b82f6" },
            { letter: "E", name: "Extraversion",       color: "#f59e0b" },
            { letter: "A", name: "Agreeableness",      color: "#10b981" },
            { letter: "N", name: "Neuroticism",        color: "#ef4444" },
          ].map((t) => (
            <span key={t.letter}
              className="text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ background: t.color }}>
              {t.letter} — {t.name}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-8 mb-8 text-center">
          <div>
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>50</div>
            <div className="text-xs" style={{ color: "#64748b" }}>Questions</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>~8 min</div>
            <div className="text-xs" style={{ color: "#64748b" }}>Duration</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>Free</div>
            <div className="text-xs" style={{ color: "#64748b" }}>Always</div>
          </div>
        </div>

        <Link href="/info">
          <button className="btn-primary">Start the Quiz →</button>
        </Link>

        <p className="text-xs mt-4" style={{ color: "#94a3b8" }}>
          No login required · Your data is private · Science-based results
        </p>
      </div>
    </main>
  );
}
