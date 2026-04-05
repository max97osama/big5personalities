"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function sanitize(val: string): string {
  return val.replace(/[<>"'`;&]/g, "");
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 60;
}

function validateAge(age: string): boolean {
  const n = Number(age);
  return Number.isInteger(n) && n >= 5 && n <= 120;
}

export default function ArabicInfoPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", sex: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(field: string, value: string) {
    const clean = sanitize(value);
    setForm((prev) => ({ ...prev, [field]: clean }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "يجب ان يكون الاسم بين 2 و 60 حرفا";
    if (!validateAge(form.age)) e.age = "يرجى ادخال عمر صحيح بين 5 و 120";
    if (!form.sex) e.sex = "يرجى اختيار الجنس";
    if (form.email && !validateEmail(form.email)) e.email = "يرجى ادخال بريد الكتروني صحيح";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    sessionStorage.setItem("userInfo", JSON.stringify({
      name: form.name.trim(),
      age: Number(form.age),
      sex: form.sex,
      email: form.email.trim(),
      language: "ar",
    }));
    router.push("/ar/quiz");
  }

  return (
    <main className="page-wrapper">
      <div className="card" style={{ maxWidth: 480 }}>

        <Link href="/ar" style={{ color: "#1a7abf", fontSize: 13, marginBottom: 20, display: "inline-block" }}>
          → رجوع
        </Link>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f2942", marginBottom: 6 }}>
          قبل ان نبدا
        </h2>
        <p style={{ fontSize: 13, color: "#5b8db8", marginBottom: 24, lineHeight: 1.8 }}>
          نجمع معلومات اساسية لاغراض البحث فقط. جميع البيانات سرية ومجهولة المصدر.
        </p>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">الاسم الكامل</label>
          <input
            className={`form-input${errors.name ? " error" : ""}`}
            placeholder="اسمك" style={{ textAlign: "right" }}
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">العمر</label>
          <input
            className={`form-input${errors.age ? " error" : ""}`}
            type="number" placeholder="عمرك" min={5} max={120}
            style={{ textAlign: "right" }}
            value={form.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
          {errors.age && <p className="error-msg">{errors.age}</p>}
        </div>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">الجنس</label>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {[{ val: "Male", label: "ذكر ♂" }, { val: "Female", label: "انثى ♀" }].map((s) => (
              <button key={s.val}
                onClick={() => setForm({ ...form, sex: s.val })}
                className="option-btn"
                style={{
                  flex: 1, justifyContent: "center",
                  ...(form.sex === s.val ? { borderColor: "#1a7abf", background: "#eaf5fd", color: "#1a7abf", fontWeight: 600 } : {})
                }}>
                {s.label}
              </button>
            ))}
          </div>
          {errors.sex && <p className="error-msg">{errors.sex}</p>}
        </div>

        <div style={{ marginBottom: 28 }}>
          <label className="form-label">
            البريد الالكتروني
            <span className="form-optional"> (اختياري — لاستلام نتائجك)</span>
          </label>
          <input
            className={`form-input${errors.email ? " error" : ""}`}
            type="email" placeholder="your@email.com"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          {errors.email && <p className="error-msg">{errors.email}</p>}
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          المتابعة الى الاختبار ←
        </button>

        <p style={{ fontSize: 11, color: "#8ab4d4", textAlign: "center", marginTop: 12 }}>
          🔒 معلوماتك خاصة ولن تشارك مع اي جهة
        </p>
      </div>
    </main>
  );
}
