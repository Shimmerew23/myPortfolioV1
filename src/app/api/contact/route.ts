import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

// Store for rate limiting (IP address -> last send time)
// In production, use a proper database or Redis
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 2 * 60 * 1000; // 2 minutes

function getRateLimitKey(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "unknown";
  return ip;
}

export async function POST(req: NextRequest) {
  try {
    const rateLimitKey = getRateLimitKey(req);
    const now = Date.now();
    const lastSendTime = rateLimitMap.get(rateLimitKey);

    // Check rate limit
    if (lastSendTime && now - lastSendTime < RATE_LIMIT_MS) {
      const secondsRemaining = Math.ceil((RATE_LIMIT_MS - (now - lastSendTime)) / 1000);
      return NextResponse.json(
        { error: `Please wait ${secondsRemaining} seconds before sending another message` },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: 'justine.psalm23@gmail.com',
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui; max-width: 600px; margin: 0 auto; background: #171212; color: #ece0df; padding: 32px; border-radius: 12px;">
          <h2 style="color: #ffb3b2; margin-top: 0; font-style: italic;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; color: #b09090; font-size: 13px; width: 80px;">From</td><td style="padding: 8px 0; font-size: 13px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #b09090; font-size: 13px;">Email</td><td style="padding: 8px 0; font-size: 13px;"><a href="mailto:${email}" style="color: #ffb3b2;">${email}</a></td></tr>
            ${subject ? `<tr><td style="padding: 8px 0; color: #b09090; font-size: 13px;">Subject</td><td style="padding: 8px 0; font-size: 13px;">${subject}</td></tr>` : ""}
          </table>
          <div style="background: #201a1a; border: 1px solid #594140; border-radius: 8px; padding: 16px;">
            <p style="margin: 0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
        </div>
      `,
    });

    // Update rate limit
    rateLimitMap.set(rateLimitKey, now);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
