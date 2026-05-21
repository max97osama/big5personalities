"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Trait } from "@/lib/questions";
import { traitInfo } from "@/lib/traits";
import type { PersonalityResult, TraitScore } from "@/lib/scoring";

const slugMap: Record<string, string> = {
  "O+C": "visionary-architect",
  "O+E": "creative-leader",
  "O+A": "empathetic-dreamer",
  "O+N": "introspective-artist",
  "C+E": "driven-networker",
  "C+A": "reliable-caregiver",
  "C+N": "perfectionist",
  "E+A": "warm-connector",
  "E+N": "passionate-performer",
  "A+N": "gentle-empath",
};

const traitSlugMap: Record<string, string> = {
  O: "openness",
  C: "conscientiousness",
  E: "extraversion",
  A: "agreeableness",
  N: "neuroticism",
};

const traitBarColors: Record<string, string> = {
  O: "#7c5cbf",
  C: "#1a6bbf",
  E: "#e07b54",
  A: "#2a9d8f",
  N: "#c0546e",
};

function getCombinedImage(combinedKey: string, scores: TraitScore[]): string {
  const [t1, t2] = combinedKey.split("+");
  const s1 = scores.find((s) => s.trait === t1);
  const s2 = scores.find((s) => s.trait === t2);
  const dominant = s1 && s2 ? (s1.percent >= s2.percent ? s1 : s2) : s1;

  const variantMap: Record<string, { low?: string; high?: string }> = {
    "O+E": { low: "trait-O_Elow" },
    "C+E": { low: "trait-C_Elow" },
    "E+N": { low: "trait-E_Nlow" },
    "O+A": { low: "trait-O_Alow" },
    "A+N": { low: "trait-A_Nlow" },
    "O+N": { high: "trait-O_Nhigh" },
  };

  const variants = variantMap[combinedKey];
  if (variants && dominant) {
    if (dominant.percent < 45 && variants.low) return `${variants.low}.webp`;
    if (dominant.percent > 75 && variants.high) return `${variants.high}.webp`;
  }

  const imageMap: Record<string, string> = {
    "O+C": "trait-o",
    "O+E": "trait-O_E",
    "O+A": "trait-O_Alow",
    "O+N": "trait-O_Nhigh",
    "C+E": "trait-C_E",
    "C+A": "trait-A_C",
    "C+N": "trait-c",
    "E+A": "trait-A_E",
    "E+N": "trait-E_Nlow",
    "A+N": "trait-A_Nlow",
  };

  return `${imageMap[combinedKey] || "trait-o"}.webp`;
}

function TraitImage({ trait }: { trait: string }) {
  const [failed, setFailed] = useState(false);
  const src = `/images/trait-${trait.toLowerCase()}.webp`;
  const info = traitInfo[trait as Trait];

  if (failed) {
    return (
      <div style={{
        width: "100%", height: 180, borderRadius: 12, marginBottom: 14,
        background: `linear-gradient(135deg, ${info.color}22, ${info.color}44)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 48 }}>
          {trait === "O" ? "🔮" : trait === "C" ? "🎯" : trait === "E" ? "⚡" : trait === "A" ? "🌿" : "🌊"}
        </span>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", height: 180, borderRadius: 12, overflow: "hidden", marginBottom: 14 }}>
      <Image
        src={src}
        alt={info.name.en}
        fill
        style={{ objectFit: "cover" }}
        unoptimized
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [customEmail, setCustomEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    const info = sessionStorage.getItem("userInfo");
    if (!stored) { router.push("/"); return; }
    setResult(JSON.parse(stored));
    if (info) {
      const parsed = JSON.parse(info);
      setUserInfo(parsed);
      if (parsed.email) setCustomEmail(parsed.email);
    }
  }, []);

  async function sendEmail() {
    if (!result) return;
    const emailToUse = customEmail.trim();
    if (!emailToUse || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailToUse)) {
      setShowEmailInput(true);
      setEmailStatus("error");
      return;
    }
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailToUse,
          name: userInfo?.name || "Friend",
          language: "en",
          result,
        }),
      });
      const data = await res.json();
      setEmailStatus(data.success ? "sent" : "error");
    } catch {
      setEmailStatus("error");
    }
  }

  if (!result) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#5b8db8" }}>Loading your results...</p>
    </div>
  );

  const dominant = traitInfo[result.dominantTrait as Trait];
  const second = traitInfo[result.secondTrait as Trait];
  const combinedImg = getCombinedImage(result.combinedKey, result.scores);
  const personalitySlug = slugMap[result.combinedKey] || "";

  return (
    <main style={{ background: "linear-gradient(160deg, #deeef9 0%, #e8f4fb 50%, #f0f7fd 100%)", minHeight: "100vh", padding: "24px 0" }}>
      <div className="result-layout">

        <div className="ad-space-side">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6466150237575506"
            data-ad-slot="9593839122"
            data-ad-format="auto"
            data-full-width-responsive="true" />
          <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
        </div>

        <div className="result-main">

          <div className="ad-space-top">
            <ins className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6466150237575506"
              data-ad-slot="9593839122"
              data-ad-format="auto"
              data-full-width-responsive="true" />
            <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
          </div>

          <div className="card" style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ position: "relative", width: "100%", height: 240, borderRadius: 16, overflow: "hidden", marginBottom: 20 }}>
              <Image
                src={`/images/${combinedImg}`}
                alt={result.personalityTitle.en}
                fill
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </div>
            <div className="combined-badge">
              {result.dominantTrait} + {result.secondTrait} — Combined Type
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d2137", marginBottom: 12 }}>
              {result.personalityTitle.en}
            </h1>
            <p style={{ fontSize: 15, color: "#5b8db8", lineHeight: 1.8, marginBottom: 20 }}>
              {result.summary.en}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: dominant.color, color: "white", fontWeight: 700 }}>
                Primary: {dominant.name.en}
              </span>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: second.color, color: "white", fontWeight: 700 }}>
                Secondary: {second.name.en}
              </span>
            </div>
            {personalitySlug && (
              <Link href={`/personalities/${personalitySlug}`}>
                <button style={{ background: "transparent", border: "2px solid #3b9dd4", color: "#3b9dd4", borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Read Full Personality Profile →
                </button>
              </Link>
            )}
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0d2137", marginBottom: 20 }}>
              Your Trait Breakdown
            </h2>
            {result.scores.map((s) => {
              const info = traitInfo[s.trait as Trait];
              const barColor = traitBarColors[s.trait] || info.color;
              return (
                <div key={s.trait} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Link href={`/traits/${traitSlugMap[s.trait]}`}
                        style={{ fontWeight: 700, color: barColor, textDecoration: "none" }}>
                        {info.name.en}
                      </Link>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: barColor, color: "white" }}>
                        {s.level}
                      </span>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: 13, color: barColor }}>
                      {s.score}/50 ({s.percent}%)
                    </span>
                  </div>
                  <div className="trait-bar">
                    <div className="trait-bar-fill" style={{ width: `${s.percent}%`, background: barColor }} />
                  </div>
                  <p style={{ fontSize: 12, color: "#8ab4d4", marginTop: 4 }}>{info.description.en}</p>
                </div>
              );
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 16 }}>
            {[result.dominantTrait, result.secondTrait].map((t) => {
              const info = traitInfo[t as Trait];
              return (
                <div key={t} className="trait-detail-card">
                  <TraitImage trait={t} />
                  <Link href={`/traits/${traitSlugMap[t]}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: info.color, marginBottom: 12, cursor: "pointer" }}>
                      {info.name.en} →
                    </h3>
                  </Link>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0d2137", marginBottom: 6 }}>Top Skills</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {info.skills.en.map((s) => (
                        <span key={s} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#e8f4fb", color: "#3b9dd4", border: "1px solid #c8dff0" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0d2137", marginBottom: 6 }}>Best Career Paths</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {info.jobs.en.map((j) => (
                        <span key={j} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0" }}>{j}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 12, color: "#5b8db8" }}>
                      <span style={{ fontWeight: 700, color: "#0d2137" }}>Best Friends: </span>
                      {info.friendTraits.en}
                    </p>
                    <p style={{ fontSize: 12, color: "#5b8db8" }}>
                      <span style={{ fontWeight: 700, color: "#0d2137" }}>Ideal Partner: </span>
                      {info.partnerTrait.en}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0d2137", marginBottom: 12 }}>
              📧 Get Your Results by Email
            </h2>
            {emailStatus === "sent" ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>✅</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#2a9d8f" }}>Email sent successfully!</p>
                <p style={{ fontSize: 13, color: "#5b8db8", marginTop: 4 }}>Check your inbox and spam folder.</p>
              </div>
            ) : (
              <>
                <p style={{ fontSize: 14, color: "#5b8db8", marginBottom: 16, lineHeight: 1.6 }}>
                  Receive a full copy of your personality results delivered to your inbox.
                </p>
                <input
                  className="form-input"
                  type="email"
                  placeholder="your@email.com"
                  value={customEmail}
                  onChange={(e) => { setCustomEmail(e.target.value); setEmailStatus("idle"); }}
                  style={{ marginBottom: 12 }}
                />
                {emailStatus === "error" && (
                  <p style={{ fontSize: 13, color: "#c0546e", marginBottom: 12 }}>
                    Please enter a valid email address and try again.
                  </p>
                )}
                <button
                  onClick={sendEmail}
                  disabled={emailStatus === "sending"}
                  className="btn-primary"
                  style={{ background: emailStatus === "sending" ? "#a8cfe5" : "#3b9dd4" }}>
                  {emailStatus === "sending" ? "Sending..." : "Send My Results →"}
                </button>
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <Link href="/info"><button className="btn-primary">🔄 Retake the Quiz</button></Link>
            <Link href="/ar/info"><button className="btn-secondary">🌐 Take Quiz in Arabic — اللغة العربية</button></Link>
            <Link href="/"><button className="btn-secondary">← Back to Home</button></Link>
          </div>

          <p style={{ textAlign: "center", fontSize: 11, color: "#8ab4d4", marginBottom: 24 }}>
            Based on the scientifically validated Big Five (OCEAN) personality model
          </p>
        </div>

        <div className="ad-space-side">
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6466150237575506"
            data-ad-slot="9593839122"
            data-ad-format="auto"
            data-full-width-responsive="true" />
          <script dangerouslySetInnerHTML={{ __html: "(adsbygoogle = window.adsbygoogle || []).push({});" }} />
        </div>
      </div>
    </main>
  );
}