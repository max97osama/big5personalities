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

export default function InfoPage() {
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
    if (!validateName(form.name)) e.name = "Name must be 2 to 60 characters";
    if (!validateAge(form.age)) e.age = "Please enter a valid age between 5 and 120";
    if (!form.sex) e.sex = "Please select your sex";
    if (form.email && !validateEmail(form.email)) e.email = "Please enter a valid email address";
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
      language: "en",
    }));
    router.push("/quiz");
  }

  return (
    <main className="page-wrapper">
      <div className="card" style={{ maxWidth: 480 }}>

        <Link href="/" style={{ color: "#1a7abf", fontSize: 13, marginBottom: 20, display: "inline-block" }}>
          ← Back
        </Link>

        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#0f2942", marginBottom: 6 }}>
          Before We Begin
        </h2>
        <p style={{ fontSize: 13, color: "#5b8db8", marginBottom: 24, lineHeight: 1.6 }}>
          We collect basic information for research purposes only. All data is anonymous and confidential.
        </p>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">Full Name</label>
          <input
            className={`form-input${errors.name ? " error" : ""}`}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}
        </div>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">Age</label>
          <input
            className={`form-input${errors.age ? " error" : ""}`}
            type="number" placeholder="Your age" min={5} max={120}
            value={form.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
          {errors.age && <p className="error-msg">{errors.age}</p>}
        </div>

        <div style={{ marginBottom: 18 }}>
          <label className="form-label">Sex</label>
          <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
            {["Male", "Female"].map((s) => (
              <button key={s}
                onClick={() => setForm({ ...form, sex: s })}
                className="option-btn"
                style={{
                  flex: 1, justifyContent: "center",
                  ...(form.sex === s ? { borderColor: "#1a7abf", background: "#eaf5fd", color: "#1a7abf", fontWeight: 600 } : {})
                }}>
                {s === "Male" ? "♂ Male" : "♀ Female"}
              </button>
            ))}
          </div>
          {errors.sex && <p className="error-msg">{errors.sex}</p>}
        </div>

        <div style={{ marginBottom: 28 }}>
          <label className="form-label">
            Email
            <span className="form-optional">(optional — to receive your results)</span>
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
          Continue to Quiz →
        </button>

        <p style={{ fontSize: 11, color: "#8ab4d4", textAlign: "center", marginTop: 12 }}>
          🔒 Your information is private and never shared
        </p>
      </div>
    </main>
  );
}
