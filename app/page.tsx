"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-wrapper">

      <div className="absolute top-4 right-4">
        <Link href="/ar">
          <button className="lang-btn">العربية</button>
        </Link>
      </div>

      <div className="card" style={{ maxWidth: 560 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🌊</div>

          <h1 style={{ fontSize: 28, fontWeight: 800, color: "#0f2942", marginBottom: 8, lineHeight: 1.3 }}>
            Discover Your Personality
          </h1>

          <p style={{ fontSize: 14, color: "#5b8db8", marginBottom: 4 }}>
            Based on the scientifically validated
          </p>

          <p style={{ fontSize: 18, fontWeight: 700, color: "#1a7abf", marginBottom: 16 }}>
            Big Five (OCEAN) Model
          </p>

          <p style={{ fontSize: 14, color: "#5b8db8", lineHeight: 1.7, marginBottom: 24 }}>
            Answer 50 honest questions and discover your unique personality
            profile across five core traits plus your combined personality type.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 24 }}>
            {[
              { letter: "O", name: "Openness",         color: "#1a8fb5" },
              { letter: "C", name: "Conscientiousness", color: "#1a6bbf" },
              { letter: "E", name: "Extraversion",      color: "#0e9b8a" },
              { letter: "A", name: "Agreeableness",     color: "#0e8a7a" },
              { letter: "N", name: "Neuroticism",       color: "#2e6da4" },
            ].map((t) => (
              <span key={t.letter} style={{
                fontSize: 12, fontWeight: 700,
                padding: "4px 12px", borderRadius: 20,
                background: t.color, color: "white"
              }}>
                {t.letter} — {t.name}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 32, marginBottom: 28 }}>
            {[
              { val: "50", label: "Questions" },
              { val: "~8 min", label: "Duration" },
              { val: "Free", label: "Always" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: "#1a7abf" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "#5b8db8" }}>{s.label}</div>
              </div>
            ))}
          </div>

          <Link href="/info">
            <button className="btn-primary">Start the Quiz →</button>
          </Link>

          <p style={{ fontSize: 11, color: "#8ab4d4", marginTop: 12 }}>
            No login required · Your data is private · Science-based results
          </p>
        </div>
      </div>
    </main>
  );
}
