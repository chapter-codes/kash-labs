import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

console.log('mailer', nodemailer);
const {
  MAIL_SERVER_HOST,
  MAIL_SERVER_PORT,
  MAIL_SERVER_USER,
  MAIL_SERVER_PASSWORD,
  MAIL_TO,
  MAIL_FROM,
} = process.env;

async function createTransporter() {
  if (
    !MAIL_SERVER_HOST ||
    !MAIL_SERVER_PORT ||
    !MAIL_SERVER_USER ||
    !MAIL_SERVER_PASSWORD
  ) {
    throw new Error("Email server environment variables are not configured.");
  }

  return nodemailer.createTransport({
    host: MAIL_SERVER_HOST,
    port: Number(MAIL_SERVER_PORT),
    secure: Number(MAIL_SERVER_PORT) === 465,
    auth: {
      user: MAIL_SERVER_USER,
      pass: MAIL_SERVER_PASSWORD,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 },
      );
    }

    const transporter = await createTransporter();

    await transporter.sendMail({
      from: MAIL_FROM || MAIL_SERVER_USER,
      to: MAIL_TO || MAIL_SERVER_USER,
      replyTo: email,
      subject: `New message from ${name} via KashLabs contact form`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111;">
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Unable to send your message at this time. Please try again later.",
      },
      { status: 500 },
    );
  }
}
