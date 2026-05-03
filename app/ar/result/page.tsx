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

export default function ArabicResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<PersonalityResult | null>(null);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [customEmail, setCustomEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("quizResult");
    const info = sessionStorage.getItem("userInfo");
    if (!stored) { router.push("/ar"); return; }
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
    if (!emailToUse || !/\S+@\S+\.\S+/.test(emailToUse)) {
      setShowEmailInput(true);
      return;
    }
    setEmailStatus("sending");
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailToUse,
          name: userInfo?.name || "صديق",
          language: "ar",
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
      <p style={{ color: "#5b8db8" }}>جاري تحميل نتائجك...</p>
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
                alt={result.personalityTitle.ar}
                fill
                style={{ objectFit: "cover" }}
                priority
                unoptimized
              />
            </div>
            <div className="combined-badge">
              {result.dominantTrait} + {result.secondTrait} — النوع المدمج
            </div>
            <h1 style={{ fontSize: 26, fontWeight: 800, color: "#0d2137", marginBottom: 12 }}>
              {result.personalityTitle.ar}
            </h1>
            <p style={{ fontSize: 15, color: "#5b8db8", lineHeight: 1.9, marginBottom: 20 }}>
              {result.summary.ar}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 16 }}>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: dominant.color, color: "white", fontWeight: 700 }}>
                الاساسية: {dominant.name.ar}
              </span>
              <span style={{ fontSize: 12, padding: "4px 14px", borderRadius: 20, background: second.color, color: "white", fontWeight: 700 }}>
                الثانوية: {second.name.ar}
              </span>
            </div>
            {personalitySlug && (
              <Link href={`/ar/personalities/${personalitySlug}`}>
                <button style={{ background: "transparent", border: "2px solid #3b9dd4", color: "#3b9dd4", borderRadius: 10, padding: "8px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  اقرا الملف الكامل لشخصيتك →
                </button>
              </Link>
            )}
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0d2137", marginBottom: 20, textAlign: "right" }}>
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
                      <Link href={`/ar/traits/${traitSlugMap[s.trait]}`}
                        style={{ fontWeight: 700, color: info.color, textDecoration: "none" }}>
                        → {info.name.ar}
                      </Link>
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
                      unoptimized
                    />
                  </div>
                  <Link href={`/ar/traits/${traitSlugMap[t]}`} style={{ textDecoration: "none" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: info.color, marginBottom: 12, cursor: "pointer", textAlign: "right" }}>
                      → {info.name.ar}
                    </h3>
                  </Link>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0d2137", marginBottom: 6, textAlign: "right" }}>المهارات الرئيسية</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>
                      {info.skills.ar.map((s) => (
                        <span key={s} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#e8f4fb", color: "#3b9dd4", border: "1px solid #c8dff0" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: 12 }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#0d2137", marginBottom: 6, textAlign: "right" }}>افضل المسارات المهنية</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "flex-end" }}>
                      {info.jobs.ar.map((j) => (
                        <span key={j} style={{ fontSize: 11, padding: "3px 10px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0" }}>{j}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <p style={{ fontSize: 12, color: "#5b8db8", textAlign: "right" }}>
                      <span style={{ fontWeight: 700, color: "#0d2137" }}>افضل الاصدقاء: </span>
                      {info.friendTraits.ar}
                    </p>
                    <p style={{ fontSize: 12, color: "#5b8db8", textAlign: "right" }}>
                      <span style={{ fontWeight: 700, color: "#0d2137" }}>الشريك المثالي: </span>
                      {info.partnerTrait.ar}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#0d2137", marginBottom: 12, textAlign: "right" }}>
              📧 احصل على نتائجك عبر البريد الالكتروني
            </h2>
            {emailStatus === "sent" ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>✅</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#2a9d8f" }}>تم ارسال البريد بنجاح!</p>
                <p style={{ fontSize: 13, color: "#5b8db8", marginTop: 4 }}>تحقق من صندوق الوارد وملف الرسائل غير المرغوب فيها.</p>
              </div>
            ) : (
              <>
                <p style={{ fontSize: 14, color: "#5b8db8", marginBottom: 16, lineHeight: 1.7, textAlign: "right" }}>
                  استلم نسخة كاملة من نتائجك في صندوق بريدك.
                </p>
                {(showEmailInput || !customEmail) && (
                  <input
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={customEmail}
                    onChange={(e) => setCustomEmail(e.target.value)}
                    style={{ marginBottom: 12 }}
                  />
                )}
                {customEmail && !showEmailInput && (
                  <p style={{ fontSize: 13, color: "#5b8db8", marginBottom: 12, textAlign: "right" }}>
                    الارسال الى: <strong style={{ color: "#0d2137" }}>{customEmail}</strong>
                    <button onClick={() => setShowEmailInput(true)}
                      style={{ background: "none", border: "none", color: "#3b9dd4", cursor: "pointer", fontSize: 12, marginRight: 8 }}>
                      تغيير
                    </button>
                  </p>
                )}
                {emailStatus === "error" && (
                  <p style={{ fontSize: 13, color: "#c0546e", marginBottom: 12, textAlign: "right" }}>
                    فشل الارسال. يرجى التحقق من البريد والمحاولة مرة اخرى.
                  </p>
                )}
                <button
                  onClick={sendEmail}
                  disabled={emailStatus === "sending"}
                  className="btn-primary"
                  style={{ background: emailStatus === "sending" ? "#a8cfe5" : "#3b9dd4" }}>
                  {emailStatus === "sending" ? "جاري الارسال..." : "ارسل نتائجي →"}
                </button>
              </>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
            <Link href="/ar/info"><button className="btn-primary">🔄 اعادة الاختبار</button></Link>
            <Link href="/info"><button className="btn-secondary">🌐 Take Quiz in English</button></Link>
            <Link href="/ar"><button className="btn-secondary">→ العودة للرئيسية</button></Link>
          </div>

          <p style={{ textAlign: "center", fontSize: 11, color: "#8ab4d4", marginBottom: 24 }}>
            مبني على نموذج الشخصية الخمسة الكبرى (OCEAN) المعتمد علميا
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