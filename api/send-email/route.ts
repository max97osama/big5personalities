import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function getLevelColor(level: string): string {
  if (level === "High") return "#2a9d8f";
  if (level === "Medium") return "#1a6bbf";
  return "#7c5cbf";
}

function getBarWidth(percent: number): string {
  return `${percent}%`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, language, result } = body;

    if (!email || !result) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const isAr = language === "ar";
    const subject = isAr
      ? `نتائج اختبار الشخصية — ${result.personalityTitle.ar}`
      : `Your Personality Results — ${result.personalityTitle.en}`;

    const traitNames: Record<string, { en: string; ar: string; color: string }> = {
      O: { en: "Openness",          ar: "الانفتاح",     color: "#7c5cbf" },
      C: { en: "Conscientiousness", ar: "الضمير",        color: "#1a6bbf" },
      E: { en: "Extraversion",      ar: "الانبساطية",    color: "#e07b54" },
      A: { en: "Agreeableness",     ar: "التوافق",       color: "#2a9d8f" },
      N: { en: "Neuroticism",       ar: "العصابية",      color: "#c0546e" },
    };

    const scoresHtml = result.scores.map((s: any) => {
      const info = traitNames[s.trait];
      return `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e8f0f7;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 700; color: ${info.color}; font-size: 14px;">
                ${isAr ? info.ar : info.en}
              </span>
              <span style="font-size: 13px; color: ${info.color}; font-weight: 600;">
                ${s.score}/50 (${s.percent}%)
              </span>
            </div>
            <div style="background: #e8f4fb; border-radius: 999px; height: 8px; overflow: hidden;">
              <div style="background: ${info.color}; width: ${getBarWidth(s.percent)}; height: 100%; border-radius: 999px;"></div>
            </div>
            <div style="margin-top: 4px;">
              <span style="font-size: 11px; font-weight: 700; padding: 2px 8px; border-radius: 10px; background: ${info.color}; color: white;">
                ${isAr ? s.levelAr : s.level}
              </span>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    const html = `
<!DOCTYPE html>
<html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background: #edf5fb; font-family: ${isAr ? "'Segoe UI', Tahoma, Arial" : "'Inter', Arial"}, sans-serif;">

  <div style="max-width: 580px; margin: 0 auto; padding: 32px 16px;">

    <div style="text-align: center; margin-bottom: 24px;">
      <span style="font-size: 40px;">🌊</span>
      <h1 style="font-size: 20px; font-weight: 800; color: #0d2137; margin: 8px 0 4px;">
        Big5Personalities
      </h1>
      <p style="font-size: 13px; color: #4a7a9b; margin: 0;">
        ${isAr ? "نموذج الشخصية الخمسة الكبرى" : "Big Five (OCEAN) Personality Model"}
      </p>
    </div>

    <div style="background: #3b9dd4; border-radius: 20px 20px 0 0; padding: 32px 28px; text-align: center;">
      <p style="font-size: 13px; color: rgba(255,255,255,0.8); margin: 0 0 8px;">
        ${isAr ? `مرحبا ${name}،` : `Hello ${name},`}
      </p>
      <p style="font-size: 13px; color: rgba(255,255,255,0.8); margin: 0 0 16px;">
        ${isAr ? "نوع شخصيتك المدمج" : "Your combined personality type"}
      </p>
      <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; color: white; margin-bottom: 12px;">
        ${result.dominantTrait} + ${result.secondTrait}
      </div>
      <h2 style="font-size: 28px; font-weight: 800; color: white; margin: 0 0 12px;">
        ${isAr ? result.personalityTitle.ar : result.personalityTitle.en}
      </h2>
      <p style="font-size: 14px; color: rgba(255,255,255,0.9); line-height: 1.7; margin: 0;">
        ${isAr ? result.summary.ar : result.summary.en}
      </p>
    </div>

    <div style="background: white; border-radius: 0 0 20px 20px; padding: 28px; margin-bottom: 16px; box-shadow: 0 4px 24px rgba(14,82,141,0.08);">
      <h3 style="font-size: 16px; font-weight: 800; color: #0d2137; margin: 0 0 16px; text-align: ${isAr ? "right" : "left"};">
        ${isAr ? "تفاصيل سماتك" : "Your Trait Breakdown"}
      </h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${scoresHtml}
      </table>
    </div>

    <div style="background: white; border-radius: 20px; padding: 24px 28px; margin-bottom: 16px; box-shadow: 0 4px 24px rgba(14,82,141,0.08); text-align: center;">
      <p style="font-size: 14px; color: #4a7a9b; margin: 0 0 16px;">
        ${isAr ? "هل تريد اكتشاف المزيد عن شخصيتك؟" : "Want to explore more about your personality?"}
      </p>
      <a href="https://big5personalities.duckdns.org/${isAr ? "ar/" : ""}personalities/${Object.entries({
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
      }).find(([k]) => k === result.combinedKey)?.[1] || ""}"
        style="display: inline-block; background: #3b9dd4; color: white; text-decoration: none; padding: 12px 28px; border-radius: 12px; font-weight: 700; font-size: 14px;">
        ${isAr ? "اقرا المزيد عن شخصيتك ←" : "Read More About Your Personality →"}
      </a>
    </div>

    <div style="text-align: center; padding: 16px;">
      <p style="font-size: 11px; color: #8ab4d4; margin: 0;">
        ${isAr
          ? "مبني على نموذج الشخصية الخمسة الكبرى (OCEAN) المعتمد علميا"
          : "Based on the scientifically validated Big Five (OCEAN) personality model"}
      </p>
      <p style="font-size: 11px; color: #8ab4d4; margin: 6px 0 0;">
        <a href="https://big5personalities.duckdns.org" style="color: #3b9dd4; text-decoration: none;">
          big5personalities.duckdns.org
        </a>
      </p>
    </div>

  </div>
</body>
</html>
    `;

    const { data, error } = await resend.emails.send({
      from: "Big5Personalities <onboarding@resend.dev>",
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Email route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
