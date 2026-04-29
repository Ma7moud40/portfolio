import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required").max(120),
  email: z.string().email("Please enter a valid email").max(200),
  message: z.string().min(1, "Message is required").max(5000),
});

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? "Please fill in all fields correctly.";
    return NextResponse.json(
      { error: firstError },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    // No-op in dev if not configured — the client falls back to mailto.
    return NextResponse.json(
      { error: "Email delivery not configured on the server." },
      { status: 501 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px;">
          <h2 style="margin:0 0 8px;color:#0b1220;">New portfolio message</h2>
          <p style="margin:0 0 16px;color:#475569;">You received a new message from your portfolio site.</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 12px;background:#f1f5f9;border-radius:6px;"><strong>From</strong></td><td style="padding:8px 12px;">${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</td></tr>
          </table>
          <h3 style="margin:20px 0 8px;color:#0b1220;">Message</h3>
          <div style="white-space:pre-wrap;padding:14px 16px;border-left:3px solid #22d3ee;background:#f8fafc;border-radius:6px;color:#0f172a;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { error: "Couldn’t send the email. Try again?" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unexpected error sending email." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
