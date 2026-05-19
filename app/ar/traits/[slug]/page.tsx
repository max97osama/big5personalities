"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { personalityDetails } from "@/lib/personalityDetails";
import { traitDetails } from "@/lib/traitDetails";
import type { Trait } from "@/lib/traitDetails";

const combinedImageMap: Record<string, string> = {
  "O+C": "trait-o.webp",
  "O+E": "trait-O_E.webp",
  "O+A": "trait-O_Alow.webp",
  "O+N": "trait-O_Nhigh.webp",
  "C+E": "trait-C_E.webp",
  "C+A": "trait-A_C.webp",
  "C+N": "trait-c.webp",
  "E+A": "trait-A_E.webp",
  "E+N": "trait-E_Nlow.webp",
  "A+N": "trait-A_Nlow.webp",
};

const traitImageMap: Record<string, string> = {
  O: "trait-o.webp",
  C: "trait-c.webp",
  E: "trait-e.webp",
  A: "trait-a.webp",
  N: "trait-n.webp",
};

function CombinedImage({ combinedKey, icon, color }: { combinedKey: string; icon: string; color: string }) {
  const [failed, setFailed] = useState(false);
  const src = `/images/${combinedImageMap[combinedKey] || "trait-o.webp"}`;

  if (failed) {
    return (
      <div style={{
        width: "100%", maxWidth: 440, height: 260, borderRadius: 20,
        margin: "0 auto 20px",
        background: `linear-gradient(135deg, ${color}33, ${color}66)`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span style={{ fontSize: 80 }}>{icon}</span>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 440, height: 260, borderRadius: 20, overflow: "hidden", margin: "0 auto 20px" }}>
      <Image
        src={src}
        alt={combinedKey}
        fill
        style={{ objectFit: "cover" }}
        unoptimized
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function TraitCard({ trait, slug, name, tagline, icon, color, lightColor }: {
  trait: string; slug: string; name: string; tagline: string;
  icon: string; color: string; lightColor: string;
}) {
  const [failed, setFailed] = useState(false);
  const src = `/images/${traitImageMap[trait] || "trait-o.webp"}`;

  return (
    <Link href={`/ar/traits/${slug}`} style={{ textDecoration: "none", flex: 1, minWidth: 140 }}>
      <div style={{ background: lightColor, border: `2px solid ${color}33`, borderRadius: 12, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s" }}
        onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
        {!failed ? (
          <div style={{ position: "relative", width: "100%", height: 120 }}>
            <Image
              src={src}
              alt={name}
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              onError={() => setFailed(true)}
            />
          </div>
        ) : (
          <div style={{
            height: 120, display: "flex", alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
          }}>
            <span style={{ fontSize: 40 }}>{icon}</span>
          </div>
        )}
        <div style={{ padding: "12px 14px", textAlign: "right" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color }}>{name}</div>
          <div style={{ fontSize: 11, color: "#6b8fa8", marginTop: 2 }}>{tagline}</div>
        </div>
      </div>
    </Link>
  );
}

export default function ArabicPersonalityPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const p = Object.values(personalityDetails).find((x) => x.slug === slug);

  if (!p) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#4a7a9b", marginBottom: 16 }}>الشخصية غير موجودة.</p>
          <Link href="/ar"><button className="btn-primary" style={{ maxWidth: 200 }}>الصفحة الرئيسية</button></Link>
        </div>
      </div>
    );
  }

  const traits = p.combinedKey.split("+").map((k) => traitDetails[k as Trait]);

  return (
    <main style={{ background: `linear-gradient(160deg, ${p.lightColor} 0%, #f0f7fd 100%)`, minHeight: "100vh", padding: "0 0 48px" }}>

      <div style={{ background: p.color, padding: "32px 16px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <Link href={`/personalities/${p.slug}`}>
              <button style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
                English
              </button>
            </Link>
            <button onClick={() => router.back()}
              style={{ background: "rgba(255,255,255,0.2)", border: "none", color: "white", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontSize: 13, fontWeight: 600 }}>
              رجوع →
            </button>
          </div>

          <CombinedImage combinedKey={p.combinedKey} icon={p.icon} color={p.color} />

          <div style={{ fontSize: 12, fontWeight: 700, background: "rgba(255,255,255,0.25)", color: "white", padding: "4px 14px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>
            {p.combinedKey} النوع المدمج
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "white", marginBottom: 6 }}>{p.title.ar}</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{p.tagline.ar}</p>
        </div>
      </div>

      <div style={{ maxWidth: 700, margin: "-24px auto 0", padding: "0 16px" }}>

        <div className="card" style={{ marginBottom: 16 }}>
          <p style={{ fontSize: 15, color: "#2d4a5e", lineHeight: 1.9, marginBottom: 16, textAlign: "right" }}>{p.summary.ar}</p>
          <p style={{ fontSize: 14, color: "#4a7a9b", lineHeight: 1.9, textAlign: "right" }}>{p.deepDescription.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>سماتك الاساسية</h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {traits.map((t) => t && (
              <TraitCard
                key={t.trait}
                trait={t.trait}
                slug={t.slug}
                name={t.name.ar}
                tagline={t.tagline.ar}
                icon={t.icon}
                color={t.color}
                lightColor={t.lightColor}
              />
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 14, textAlign: "right" }}>السمات الاساسية</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.coreTraits.ar.map((ct) => (
              <span key={ct} style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: p.lightColor, color: p.color, border: `1px solid ${p.color}33`, fontWeight: 600 }}>{ct}</span>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>نقاط القوة</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.strengths.ar.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <span style={{ color: p.color, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5, textAlign: "right" }}>{s}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 800, color: "#c0546e", marginBottom: 12, textAlign: "right" }}>التحديات</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {p.challenges.ar.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                  <span style={{ color: "#c0546e", fontWeight: 700, flexShrink: 0 }}>!</span>
                  <p style={{ fontSize: 13, color: "#2d4a5e", lineHeight: 1.5, textAlign: "right" }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>افضل المسارات المهنية</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.jobs.ar.map((j) => (
              <span key={j} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 20, background: "#f0f7fd", color: "#2d4a5e", border: "1px solid #c8dff0", fontWeight: 600 }}>{j}</span>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>امثلة مشهورة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {p.famousExamples.ar.map((f, i) => (
              <div key={i} style={{ fontSize: 14, color: "#2d4a5e", padding: "10px 14px", background: p.lightColor, borderRadius: 10, borderRight: `3px solid ${p.color}`, textAlign: "right" }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>في العلاقات</h2>
          <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.9, textAlign: "right" }}>{p.inRelationships.ar}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>نصائح للنمو</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {p.growthTips.ar.map((tip, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", flexDirection: "row-reverse" }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>💡</span>
                <p style={{ fontSize: 14, color: "#2d4a5e", lineHeight: 1.7, textAlign: "right" }}>{tip}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ marginBottom: 24 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: p.color, marginBottom: 12, textAlign: "right" }}>الشخصيات المتوافقة</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "flex-end" }}>
            {p.compatiblePersonalities.ar.map((cp) => {
              const cpSlug = cp.match(/\(([^)]+)\)/)?.[1];
              const cpData = cpSlug ? Object.values(personalityDetails).find(x => x.combinedKey === cpSlug) : null;
              return (
                <Link key={cp} href={cpData ? `/ar/personalities/${cpData.slug}` : "#"} style={{ textDecoration: "none" }}>
                  <span style={{ fontSize: 13, padding: "6px 14px", borderRadius: 20, background: cpData?.lightColor || "#f0f7fd", color: cpData?.color || "#2d4a5e", border: `1px solid ${cpData?.color || "#c8dff0"}44`, fontWeight: 600, cursor: "pointer", display: "inline-block" }}>{cp}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Link href="/ar/info"><button className="btn-primary">ابدا الاختبار ←</button></Link>
          <Link href="/ar"><button className="btn-secondary">→ كل الشخصيات</button></Link>
        </div>
      </div>
    </main>
  );
}
