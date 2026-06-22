import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { nombre, telefono, tipoAccidente, descripcion } = await req.json();

  if (!nombre || !telefono || !tipoAccidente || !descripcion) {
    return NextResponse.json({ error: "Faltan campos." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host:   process.env.SMTP_HOST,
    port:   Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from:    `"Carlaccidentes Web" <${process.env.SMTP_USER}>`,
    to:      process.env.CORREO_DESTINO ?? "info@carlaccidentes.com",
    replyTo: telefono,
    subject: `Nuevo caso — ${tipoAccidente} | ${nombre}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:auto;padding:32px;background:#f9f9f9;border-radius:8px;">
        <h2 style="color:#1a1a2e;margin-bottom:24px;">Nuevo caso desde carlaccidentes.com</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#555;font-size:13px;width:140px;">Nombre</td><td style="padding:8px 0;font-weight:600;">${nombre}</td></tr>
          <tr><td style="padding:8px 0;color:#555;font-size:13px;">Teléfono</td><td style="padding:8px 0;font-weight:600;">${telefono}</td></tr>
          <tr><td style="padding:8px 0;color:#555;font-size:13px;">Tipo de accidente</td><td style="padding:8px 0;font-weight:600;">${tipoAccidente}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#fff;border-radius:6px;border-left:4px solid #C9A961;">
          <p style="color:#555;font-size:13px;margin:0 0 6px;">Descripción</p>
          <p style="margin:0;white-space:pre-wrap;">${descripcion}</p>
        </div>
        <p style="margin-top:24px;font-size:12px;color:#999;">Enviado desde www.carlaccidentes.com</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
