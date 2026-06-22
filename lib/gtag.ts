export const GA_ID = "G-5D7096N7BC";

declare global {
  interface Window {
    gtag:      (...args: unknown[]) => void;
    dataLayer: unknown[];
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

/* Helpers de eventos específicos */

export const track = {
  whatsapp: (source: string) =>
    trackEvent("whatsapp_click", { source }),

  formSubmit: () =>
    trackEvent("form_submit", { form_name: "contacto" }),

  formSuccess: () =>
    trackEvent("form_success", { form_name: "contacto" }),

  ctaClick: (label: string) =>
    trackEvent("cta_click", { label }),
};
