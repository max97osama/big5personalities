"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InfoPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", age: "", sex: "", email: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.age || Number(form.age) < 5 || Number(form.age) > 120)
      e.age = "Please enter a valid age";
    if (!form.sex) e.sex = "Please select your sex";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Please enter a valid email";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    sessionStorage.setItem("userInfo", JSON.stringify({ ...form, language: "en" }));
    router.push("/quiz");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
          style={{ background: "linear-gradient(135deg, #eef2ff 0%, #f0fdfa 100%)" }}>
      <div className="card max-w-lg w-full">

        <Link href="/" className="text-sm mb-6 inline-block" style={{ color: "#4f46e5" }}>
          ← Back
        </Link>

        <h2 className="text-2xl font-bold mb-2" style={{ color: "#1e293b" }}>
          Before We Begin
        </h2>
        <p className="text-sm mb-8" style={{ color: "#64748b" }}>
          We collect basic information for research purposes only.
          All data is anonymous and confidential.
        </p>

        <div className="mb-5">
          <label className="form-label">Full Name</label>
          <input className="form-input" placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>}
        </div>

        <div className="mb-5">
          <label className="form-label">Age</label>
          <input className="form-input" type="number" placeholder="Your age" min={5} max={120}
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })} />
          {errors.age && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.age}</p>}
        </div>

        <div className="mb-5">
          <label className="form-label">Sex</label>
          <div className="flex gap-3 mt-1">
            {["Male", "Female"].map((s) => (
              <button key={s}
                onClick={() => setForm({ ...form, sex: s })}
                className="option-btn flex-1 text-center"
                style={form.sex === s ? {
                  borderColor: "#4f46e5", background: "#eef2ff",
                  color: "#4f46e5", fontWeight: 600
                } : {}}>
                {s === "Male" ? "♂ Male" : "♀ Female"}
              </button>
            ))}
          </div>
          {errors.sex && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.sex}</p>}
        </div>

        <div className="mb-8">
          <label className="form-label">
            Email <span className="form-optional">(optional — to receive your results)</span>
          </label>
          <input className="form-input" type="email" placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
        </div>

        <button className="btn-primary" onClick={handleSubmit}>
          Continue to Quiz →
        </button>

        <p className="text-xs text-center mt-4" style={{ color: "#94a3b8" }}>
          🔒 Your information is private and never shared
        </p>
      </div>
    </main>
  );
}
