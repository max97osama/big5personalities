"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions, answerOptions } from "@/lib/questions";

export default function ArabicQuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitting, setSubmitting] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    const info = sessionStorage.getItem("userInfo");
    if (!info) { router.push("/ar/info"); return; }
    setUserInfo(JSON.parse(info));
  }, []);

  const q = questions[current];
  const total = questions.length;
  const progress = Math.round(((current + 1) / total) * 100);
  const selected = answers[q.id];
  const isLast = current === total - 1;

  const traitColor: Record<string, string> = {
    O: "#1a8fb5", C: "#1a6bbf", E: "#0e9b8a", A: "#0e8a7a", N: "#2e6da4"
  };
  const traitNameAr: Record<string, string> = {
    O: "الانفتاح", C: "الضمير", E: "الانبساطية", A: "التوافق", N: "العصابية"
  };

  function selectAnswer(val: number) {
    setAnswers((prev) => ({ ...prev, [q.id]: val }));
  }

  function goNext() {
    if (!selected) return;
    if (isLast) { handleSubmit(); return; }
    setCurrent((c) => c + 1);
  }

  function goBack() {
    if (current > 0) setCurrent((c) => c - 1);
  }

  async function handleSubmit() {
    setSubmitting(true);
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...userInfo, answers }),
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem("quizResult", JSON.stringify(data.result));
        router.push("/ar/result");
      } else {
        alert("حدث خطا ما. يرجى المحاولة مرة اخرى.");
      }
    } catch {
      alert("حدث خطا ما. يرجى المحاولة مرة اخرى.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="page-wrapper" style={{ justifyContent: "flex-start", paddingTop: 32 }}>
      <div style={{ width: "100%", maxWidth: 560 }}>

        <div style={{ marginBottom: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#5b8db8", marginBottom: 8 }}>
            <span>{progress}% مكتمل</span>
            <span>سوال {current + 1} من {total}</span>
          </div>
          <div className="trait-bar">
            <div className="trait-bar-fill" style={{ width: `${progress}%`, background: "linear-gradient(90deg, #1a7abf, #0e9b8a)" }} />
          </div>
        </div>

        <div className="card question-card" key={q.id}>

          <span style={{
            fontSize: 11, fontWeight: 700, padding: "4px 12px",
            borderRadius: 20, background: traitColor[q.trait],
            color: "white", marginBottom: 16, display: "inline-block"
          }}>
            {traitNameAr[q.trait]}
          </span>

          <h2 style={{ fontSize: 18, fontWeight: 600, color: "#0f2942", marginBottom: 24, lineHeight: 1.7 }}>
            {q.ar}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {answerOptions.ar.map((opt) => (
              <button key={opt.value}
                className={`option-btn${selected === opt.value ? " selected" : ""}`}
                onClick={() => selectAnswer(opt.value)}>
                <span className={`option-circle${selected === opt.value ? " checked" : ""}`} />
                {opt.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 24, flexDirection: "row-reverse" }}>
            {current > 0 && (
              <button className="btn-secondary" onClick={goBack} style={{ width: "auto", padding: "12px 20px" }}>
                رجوع →
              </button>
            )}
            <button className="btn-primary" onClick={goNext} disabled={!selected || submitting}>
              {submitting ? "جاري الارسال..." : isLast ? "🎉 اعرض نتائجي" : "التالي ←"}
            </button>
          </div>
        </div>

        <p style={{ textAlign: "center", fontSize: 12, color: "#8ab4d4", marginTop: 12 }}>
          تم الاجابة على {Object.keys(answers).length} من {total} سوال
        </p>
      </div>
    </main>
  );
}
