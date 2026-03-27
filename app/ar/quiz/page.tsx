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
      }
    } catch {
      alert("حدث خطأ ما. يرجى المحاولة مرة أخرى.");
    } finally {
      setSubmitting(false);
    }
  }

  const traitNameAr: Record<string, string> = {
    O: "الانفتاح", C: "الضمير",
    E: "الانبساطية", A: "التوافق", N: "العصابية"
  };
  const traitColor: Record<string, string> = {
    O: "#8b5cf6", C: "#3b82f6",
    E: "#f59e0b", A: "#10b981", N: "#ef4444"
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>
      <div className="w-full max-w-xl">

        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2" style={{ color: "#64748b" }}>
            <span>{progress}% مكتمل</span>
            <span>سؤال {current + 1} من {total}</span>
          </div>
          <div className="trait-bar">
            <div className="trait-bar-fill"
                 style={{ width: `${progress}%`, background: "#4f46e5" }} />
          </div>
        </div>

        <div className="card question-card" key={q.id}>
          <span className="text-xs font-bold px-3 py-1 rounded-full text-white mb-4 inline-block"
                style={{ background: traitColor[q.trait] }}>
            {traitNameAr[q.trait]}
          </span>

          <h2 className="text-xl font-semibold mb-8"
              style={{ color: "#1e293b", lineHeight: "1.7" }}>
            {q.ar}
          </h2>

          <div className="flex flex-col gap-3">
            {answerOptions.ar.map((opt) => (
              <button key={opt.value}
                className={`option-btn ${selected === opt.value ? "selected" : ""}`}
                onClick={() => selectAnswer(opt.value)}>
                <span className="inline-block w-6 h-6 rounded-full border-2 ml-3 text-center text-xs leading-5"
                      style={{
                        borderColor: selected === opt.value ? "#4f46e5" : "#cbd5e1",
                        background:  selected === opt.value ? "#4f46e5" : "white",
                        color:       selected === opt.value ? "white" : "#64748b",
                        float: "left",
                      }}>
                  {opt.value}
                </span>
                {opt.label}
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-8">
            <button className="btn-primary flex-1" onClick={goNext}
              disabled={!selected || submitting}>
              {submitting ? "جاري الإرسال..." : isLast ? "🎉 اعرض نتائجي" : "التالي ←"}
            </button>
            {current > 0 && (
              <button className="btn-secondary flex-1" onClick={goBack}>→ رجوع</button>
            )}
          </div>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "#94a3b8" }}>
          تم الإجابة على {Object.keys(answers).length} من {total} سؤال
        </p>
      </div>
    </main>
  );
}
