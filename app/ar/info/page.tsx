"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ArabicInfoPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", sex: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    if (!form.age || Number(form.age) < 5 || Number(form.age) > 120)
      e.age = "يرجى إدخال عمر صحيح";
    if (!form.sex) e.sex = "يرجى اختيار الجنس";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      e.email = "يرجى إدخال بريد إلكتروني صحيح";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    sessionStorage.setItem("userInfo", JSON.stringify({ ...form, language: "ar" }));
    router.push("/ar/quiz");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>
      <div className="card max-w-lg w-full">

        <Link href="/ar" className="text-sm mb-6 inline-block" style={{ color: "#4f46e5" }}>
          → رجوع
        </Link>

        <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e293b" }}>
          قبل أن نبدأ
        </h2>
        <p className="text-sm mb-8" style={{ color: "#64748b" }}>
          نجمع معلومات أساسية لأغراض البحث فقط.
          جميع البيانات سرية ومجهولة المصدر.
        </p>

        <div className="mb-5">
          <label className="form-label">الاسم الكامل</label>
          <input className="form-input" placeholder="اسمك"
            style={{ textAlign: "right" }}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>}
        </div>

        <div className="mb-5">
          <label className="form-label">العمر</label>
          <input className="form-input" type="number" placeholder="عمرك" min={5} max={120}
            style={{ textAlign: "right" }}
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })} />
          {errors.age && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.age}</p>}
        </div>

        <div className="mb-5">
          <label className="form-label">الجنس</label>
          <div className="flex gap-3 mt-1">
            {[{ val: "Male", label: "♂ ذكر" },
              { val: "Female", label: "♀ أنثى" }].map((s) => (
              <button key={s.val}
                onClick={() => setForm({ ...form, sex: s.val })}
                className="option-btn flex-1 text-center"
                style={form.sex === s.val ? {
                  borderColor: "#4f46e5", background: "#eef2ff",
                  color: "#4f46e5", fontWeight: 600
                } : {}}>
                {s.label}
              </button>
            ))}
          </div>
          {errors.sex && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.sex}</p>}
        </div>

        <div className="mb-8">
          <label className="form-label">
            البريد الإلكتروني
            <span className="form-optional"> (اختياري — لاستلام نتائجك)</span>
          </label>
          <input className="form-input" type="email" placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          المتابعة إلى الاختبار ←
        </button>

        <p className="text-xs text-center mt-4" style={{ color: "#94a3b8" }}>
          🔒 معلوماتك خاصة ولن تُشارك مع أي جهة
        </p>
      </div>
    </main>
  );
}
