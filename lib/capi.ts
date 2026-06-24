import crypto from "crypto";
import { PIXEL_ID } from "./gtag";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function normalizePhone(phone: string): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.length === 10) digits = "1" + digits;
  return digits;
}

interface CAPIPayload {
  eventName:   string;
  eventId:     string;
  sourceUrl:   string;
  phone?:      string;
  nombre?:     string;
  ip?:         string;
  userAgent?:  string;
  customData?: Record<string, string>;
}

export async function sendCAPIEvent({
  eventName,
  eventId,
  sourceUrl,
  phone,
  nombre,
  ip,
  userAgent,
  customData,
}: CAPIPayload): Promise<void> {
  const token = process.env.META_CAPI_TOKEN;
  if (!token) return;

  const userData: Record<string, unknown> = {};

  if (phone) {
    const normalized = normalizePhone(phone);
    if (normalized) userData.ph = [sha256(normalized)];
  }

  if (nombre) {
    const parts = nombre.trim().split(/\s+/);
    userData.fn = [sha256(parts[0])];
    if (parts.length > 1) userData.ln = [sha256(parts.slice(1).join(" "))];
  }

  if (ip)        userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;

  const body: Record<string, unknown> = {
    data: [{
      event_name:       eventName,
      event_time:       Math.floor(Date.now() / 1000),
      event_id:         eventId,
      action_source:    "website",
      event_source_url: sourceUrl,
      user_data:        userData,
      ...(customData ? { custom_data: customData } : {}),
    }],
  };

  // Solo durante pruebas — elimina META_TEST_EVENT_CODE del .env cuando vayas a producción
  if (process.env.META_TEST_EVENT_CODE) {
    body.test_event_code = process.env.META_TEST_EVENT_CODE;
  }

  try {
    await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${token}`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) },
    );
  } catch {
    // CAPI falla silenciosamente — no interrumpe el flujo principal
  }
}
