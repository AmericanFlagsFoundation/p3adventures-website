import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, destination, timeframe, message } =
      await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: Georgia, serif; background: #fdf8f0; margin: 0; padding: 0; }
    .wrapper { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
    .header { background: #0e5278; padding: 32px 40px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; letter-spacing: 1px; }
    .header p { color: #d4a843; margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; }
    .badge { display: inline-block; background: #d4a843; color: #ffffff; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 20px; margin-top: 12px; }
    .body { padding: 36px 40px; }
    .field { margin-bottom: 20px; border-bottom: 1px solid #f0ebe0; padding-bottom: 16px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; color: #c49a2e; margin-bottom: 4px; }
    .value { font-size: 16px; color: #1a1a2e; line-height: 1.6; }
    .message-box { background: #fdf8f0; border-left: 4px solid #0e5278; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 8px; }
    .footer { background: #f5f0e8; padding: 20px 40px; text-align: center; }
    .footer p { color: #888; font-size: 12px; margin: 4px 0; }
    .reply-hint { background: #0e5278; color: #ffffff; padding: 16px 24px; border-radius: 8px; margin: 24px 0 0; text-align: center; font-size: 14px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>🌍 P3 Adventures</h1>
      <p>New Trip Inquiry</p>
      <div class="badge">📬 From P3Adventures.com Contact Form</div>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${firstName} ${lastName || ""}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${email}" style="color:#0e5278;">${email}</a></div>
      </div>
      <div class="field">
        <div class="label">Destination Interest</div>
        <div class="value">${destination || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="label">Travel Timeframe</div>
        <div class="value">${timeframe || "Not specified"}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${message.replace(/\n/g, "<br/>")}</div>
      </div>
      <div class="reply-hint">
        💡 Hit <strong>Reply</strong> to respond directly to ${firstName} at ${email}
      </div>
    </div>
    <div class="footer">
      <p>Submitted: ${submittedAt} (Central Time)</p>
      <p>Source: p3adventures.com/contact</p>
      <p style="margin-top:8px; color:#c49a2e; font-weight:bold;">Explore the Extraordinary</p>
    </div>
  </div>
</body>
</html>
    `;

    await transporter.sendMail({
      from: `"P3 Adventures Website" <${process.env.ZOHO_EMAIL}>`,
      to: "carrie@p3adventures.com",
      replyTo: email,
      subject: `🌍 New Trip Inquiry — ${firstName} ${lastName || ""} | P3Adventures.com`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
