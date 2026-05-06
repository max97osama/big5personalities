import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, language, result } = body;

    if (!email || !result) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const isAr = language === "ar";

    const subject = isAr
      ? `نتائج اختبار الشخصية`
      : `Your Big Five Personality Results`;

    const traitNames: Record<string, { en: string; ar: string; color: string }> = {
      O: { en: "Openness",          ar: "الانفتاح",   color: "#7c5cbf" },
      C: { en: "Conscientiousness", ar: "الضمير",      color: "#1a6bbf" },
      E: { en: "Extraversion",      ar: "الانبساطية",  color: "#e07b54" },
      A: { en: "Agreeableness",     ar: "التوافق",     color: "#2a9d8f" },
      N: { en: "Neuroticism",       ar: "العصابية",    color: "#c0546e" },
    };

    const scoresHtml = result.scores.map((s: any) => {
      const info = traitNames[s.trait] || { en: s.trait, ar: s.trait, color: "#3b9dd4" };
      return `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e8f0f7;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-weight:700;color:${info.color};font-size:14px;">
                ${isAr ? info.ar : info.en}
              </span>
              <span style="font-size:13px;color:${info.color};font-weight:600;">
                ${s.score}/50 (${s.percent}%)
              </span>
            </div>
            <div style="background:#e8f4fb;border-radius:999px;height:8px;overflow:hidden;">
              <div style="background:${info.color};width:${s.percent}%;height:100%;border-radius:999px;"></div>
            </div>
            <span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;background:${info.color};color:white;display:inline-block;margin-top:4px;">
              ${isAr ? s.levelAr : s.level}
            </span>
          </td>
        </tr>
      `;
    }).join("");

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#edf5fb;font-family:Arial,sans-serif;">
<div style="max-width:560px;margin:0 auto;padding:32px 16px;">

  <div style="text-align:center;margin-bottom:20px;">
    <span style="font-size:36px;">🧠</span>
    <h1 style="font-size:18px;font-weight:800;color:#0d2137;margin:8px 0 2px;">Big5Personalities</h1>
    <p style="font-size:12px;color:#4a7a9b;margin:0;">Big Five (OCEAN) Personality Model</p>
  </div>

  <div style="background:#3b9dd4;border-radius:20px 20px 0 0;padding:28px;text-align:center;">
    <p style="color:rgba(255,255,255,0.85);margin:0 0 8px;font-size:14px;">
      ${isAr ? `مرحبا ${name}` : `Hello ${name}`}
    </p>
    <div style="background:rgba(255,255,255,0.2);display:inline-block;padding:3px 12px;border-radius:20px;color:white;font-size:11px;font-weight:700;margin-bottom:10px;">
      ${result.dominantTrait} + ${result.secondTrait}
    </div>
    <h2 style="font-size:24px;font-weight:800;color:white;margin:0 0 10px;">
      ${isAr ? result.personalityTitle.ar : result.personalityTitle.en}
    </h2>
    <p style="font-size:14px;color:rgba(255,255,255,0.9);line-height:1.7;margin:0;">
      ${isAr ? result.summary.ar : result.summary.en}
    </p>
  </div>

  <div style="background:white;border-radius:0 0 20px 20px;padding:24px;margin-bottom:16px;box-shadow:0 4px 20px rgba(14,82,141,0.08);">
    <h3 style="font-size:15px;font-weight:800;color:#0d2137;margin:0 0 14px;">
      ${isAr ? "تفاصيل سماتك" : "Your Trait Breakdown"}
    </h3>
    <table style="width:100%;border-collapse:collapse;">${scoresHtml}</table>
  </div>

  <div style="background:white;border-radius:20px;padding:20px;text-align:center;margin-bottom:16px;box-shadow:0 4px 20px rgba(14,82,141,0.08);">
    <a href="https://big5personalities.duckdns.org"
       style="display:inline-block;background:#3b9dd4;color:white;text-decoration:none;padding:12px 24px;border-radius:12px;font-weight:700;font-size:14px;">
      ${isAr ? "زيارة الموقع" : "Visit Site →"}
    </a>
  </div>

  <p style="text-align:center;font-size:11px;color:#8ab4d4;margin:0;">
    big5personalities.duckdns.org
  </p>
</div>
</body>
</html>`;

    const { data, error } = await resend.emails.send({
      from: "Big5Personalities <onboarding@resend.dev>",
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: "Send failed", details: error }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Email error:", err.message || err);
    return NextResponse.json({ error: "Server error", details: err.message }, { status: 500 });
  }
}
