import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// ── Types ────────────────────────────────────────────────────────────────────

interface EmailBody {
  email: string
  message: string
}

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Basic email format check – not a full RFC parser, but good enough for a
 *  server-side sanity gate before we hit the SMTP server. */
function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

/** Escape HTML special chars so injected content can't break the email body. */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>")
}

// ── Transport (created once per cold-start, reused across warm invocations) ──

function createTransport() {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    throw new Error(
      "Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables."
    )
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  })
}

// ── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: Partial<EmailBody>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    )
  }

  const { email, message } = body

  // 2. Validate inputs
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 422 }
    )
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 422 }
    )
  }

  if (message.trim().length > 2000) {
    return NextResponse.json(
      { error: "Message must be 2 000 characters or fewer." },
      { status: 422 }
    )
  }

  // 3. Build and send email
  const recipientAddress = process.env.CONTACT_RECIPIENT_EMAIL
  if (!recipientAddress) {
    console.error("CONTACT_RECIPIENT_EMAIL is not set.")
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 }
    )
  }

  const sanitisedEmail = email.trim()
  const sanitisedMessage = message.trim()

  const htmlBody = `
    <div style="font-family: Inter, Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a2e;">
      <div style="background: #6d28d9; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700;">
          New Contact Form Submission
        </h1>
        <p style="margin: 6px 0 0; color: rgba(255,255,255,0.75); font-size: 14px;">
          Infix Systems — infixsystems.com
        </p>
      </div>

      <div style="background: #f5f3ff; padding: 28px 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #6d28d9; width: 120px;">
              FROM
            </td>
            <td style="padding: 8px 0; font-size: 14px;">
              <a href="mailto:${sanitisedEmail}" style="color: #1a1a2e; text-decoration: none;">
                ${escapeHtml(sanitisedEmail)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 13px; font-weight: 600; color: #6d28d9;">
              RECEIVED
            </td>
            <td style="padding: 8px 0; font-size: 14px; color: #555;">
              ${new Date().toUTCString()}
            </td>
          </tr>
        </table>
      </div>

      <div style="background: #ffffff; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0 0 12px; font-size: 13px; font-weight: 600; color: #6d28d9; text-transform: uppercase; letter-spacing: 0.05em;">
          Message
        </p>
        <p style="margin: 0; font-size: 15px; line-height: 1.7; color: #1a1a2e; white-space: pre-wrap;">
          ${escapeHtml(sanitisedMessage)}
        </p>
      </div>
    </div>
  `

  try {
    const transporter = createTransport()

    await transporter.sendMail({
      from: `"Infix Systems Contact" <${process.env.GMAIL_USER}>`,
      replyTo: sanitisedEmail,
      to: recipientAddress,
      subject: `New message from ${sanitisedEmail}`,
      html: htmlBody,
      text: `From: ${sanitisedEmail}\n\n${sanitisedMessage}`,
    })

    return NextResponse.json(
      { success: true, message: "Your message has been sent!" },
      { status: 200 }
    )
  } catch (err) {
    console.error("[send-email] SMTP error:", err)
    return NextResponse.json(
      { error: "Failed to send your message. Please try again." },
      { status: 500 }
    )
  }
}

// Disallow all other HTTP methods cleanly
export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 })
}