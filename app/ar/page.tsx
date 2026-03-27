"use client";
import Link from "next/link";

export default function ArabicHome() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>

      <div className="absolute top-4 left-4">
        <Link href="/"
          className="text-sm font-semibold px-4 py-2 rounded-full border-2"
          style={{ borderColor: "#4f46e5", color: "#4f46e5" }}>
          English
        </Link>
      </div>

      <div className="card max-w-xl w-full text-center">
        <div className="text-6xl mb-6">🧠</div>

        <h1 className="text-3xl font-bold mb-3" style={{ color: "#1e293b" }}>
          اكتشف شخصيتك
        </h1>
        <p className="text-base mb-2" style={{ color: "#64748b" }}>
          بناءً على النموذج العلمي المعتمد
        </p>
        <p className="text-xl font-bold mb-6" style={{ color: "#4f46e5" }}>
          نموذج الشخصية الخمسة الكبرى (OCEAN)
        </p>
        <p className="text-sm mb-8" style={{ color: "#64748b", lineHeight: "1.9" }}>
          أجب على ٥٠ سؤالاً بصدق واكتشف ملفك الشخصي الفريد عبر خمس سمات أساسية:
          الانفتاح، والضمير، والانبساطية، والتوافق، والعصابية.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { letter: "O", name: "الانفتاح",   color: "#8b5cf6" },
            { letter: "C", name: "الضمير",      color: "#3b82f6" },
            { letter: "E", name: "الانبساطية",  color: "#f59e0b" },
            { letter: "A", name: "التوافق",     color: "#10b981" },
            { letter: "N", name: "العصابية",    color: "#ef4444" },
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
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>٥٠</div>
            <div className="text-xs" style={{ color: "#64748b" }}>سؤال</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>~٨ دقائق</div>
            <div className="text-xs" style={{ color: "#64748b" }}>المدة</div>
          </div>
          <div>
            <div className="text-2xl font-bold" style={{ color: "#4f46e5" }}>مجاني</div>
            <div className="text-xs" style={{ color: "#64748b" }}>دائماً</div>
          </div>
        </div>

        <Link href="/ar/info">
          <button className="btn-primary">ابدأ الاختبار ←</button>
        </Link>

        <p className="text-xs mt-4" style={{ color: "#94a3b8" }}>
          لا حاجة لتسجيل الدخول · بياناتك خاصة · نتائج مبنية على علم النفس
        </p>
      </div>
    </main>
  );
}
