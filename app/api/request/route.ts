import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type LeadPayload = {
  locale?: string;
  width?: number | string;
  length?: number | string;
  area?: number | string;
  name?: string;
  phone?: string;
  email?: string;
  comment?: string;
  systems?: string[];
};

const allowedSystems = new Set([
  "climate",
  "fogging",
  "cooling",
  "heating",
  "screening",
  "irrigation",
  "automation",
]);

function parsePositiveNumber(value: number | string | undefined) {
  const parsed =
    typeof value === "number" ? value : typeof value === "string" ? Number.parseFloat(value) : Number.NaN;

  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    const width = parsePositiveNumber(body.width);
    const length = parsePositiveNumber(body.length);
    const calculatedArea = parsePositiveNumber(body.area) ?? (width && length ? width * length : null);
    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const comment = body.comment?.trim() ?? "";
    const systems = Array.isArray(body.systems) ? body.systems.filter((item) => allowedSystems.has(item)) : [];

    if (!width || !length || !calculatedArea || !name || !phone || !email || !isValidEmail(email) || systems.length === 0) {
      return NextResponse.json(
        {
          message: "Please fill in valid greenhouse dimensions, contact details and at least one system.",
        },
        { status: 400 },
      );
    }

    const systemList = systems.map((item) => item[0].toUpperCase() + item.slice(1)).join(", ");
    const areaLabel = `${Math.round(calculatedArea)} m²`;
    const messageText = [
      "New greenhouse inquiry",
      "",
      `Locale: ${body.locale ?? "en"}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Width: ${width} m`,
      `Length: ${length} m`,
      `Area: ${areaLabel}`,
      `Systems: ${systemList}`,
      `Comment: ${comment || "No comment provided"}`,
    ].join("\n");

    const messageHtml = `
      <div style="font-family:Arial,sans-serif;color:#0d1513;line-height:1.7">
        <h2 style="margin-bottom:16px">New greenhouse inquiry</h2>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 0;font-weight:600">Locale</td><td style="padding:8px 0">${escapeHtml(body.locale ?? "en")}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Phone</td><td style="padding:8px 0">${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Width</td><td style="padding:8px 0">${width} m</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Length</td><td style="padding:8px 0">${length} m</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Area</td><td style="padding:8px 0">${areaLabel}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Systems</td><td style="padding:8px 0">${escapeHtml(systemList)}</td></tr>
          <tr><td style="padding:8px 0;font-weight:600">Comment</td><td style="padding:8px 0">${escapeHtml(comment || "No comment provided")}</td></tr>
        </table>
      </div>
    `;

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
    const targetEmail = process.env.REQUEST_TO_EMAIL ?? smtpUser;

    if (smtpHost && smtpUser && smtpPass && smtpFrom && targetEmail) {
      const transport = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transport.sendMail({
        from: smtpFrom,
        to: targetEmail,
        replyTo: email,
        subject: `Greenhouse request | ${name} | ${areaLabel}`,
        text: messageText,
        html: messageHtml,
      });
    } else {
      console.info("Lead received without SMTP configuration.", messageText);
    }

    return NextResponse.json({
      message: "Thank you. Your request has been sent. Our team will contact you soon.",
    });
  } catch (error) {
    console.error("Request submission failed", error);

    return NextResponse.json(
      {
        message: "Unable to send the request right now. Please try again later.",
      },
      { status: 500 },
    );
  }
}
