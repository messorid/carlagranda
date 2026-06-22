export const GA_ID     = "G-5D7096N7BC";
export const PIXEL_ID  = "937812359271260";

declare global {
  interface Window {
    gtag:      (...args: unknown[]) => void;
    dataLayer: unknown[];
    fbq:       (...args: unknown[]) => void;
    _fbq:      unknown;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number>,
) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

export function trackPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, params);
  }
}

/* Helpers de eventos — disparan GA4 + Meta Pixel simultáneamente */

export const track = {
  whatsapp: (source: string) => {
    trackEvent("whatsapp_click", { source });
    trackPixel("Contact", { source });        // Meta: evento estándar Contact
    trackPixel("Lead",    { source });        // Meta: evento estándar Lead
  },

  formSubmit: () => {
    trackEvent("form_submit", { form_name: "contacto" });
  },

  formSuccess: () => {
    trackEvent("form_success", { form_name: "contacto" });
    trackPixel("Lead",    { form: "contacto" }); // Meta: Lead al enviar el form
    trackPixel("Contact", { form: "contacto" });
  },

  ctaClick: (label: string) => {
    trackEvent("cta_click", { label });
    trackPixel("ViewContent", { content_name: label });
  },
};
