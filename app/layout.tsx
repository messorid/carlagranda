import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_ID } from "@/lib/gtag";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Carlaccidentes | Conectamos víctimas de accidentes con abogados especializados",
  description:
    "¿Tuviste un accidente? Te conectamos con abogados especializados en accidentes para que recibas la indemnización que mereces. Sin costo inicial para ti.",
  keywords: [
    "accidente de auto",
    "accidente laboral",
    "indemnización por accidente",
    "abogado de accidentes",
    "mordida de perro",
    "resbalón y caída",
    "Carlaccidentes",
    "Carla Granda",
  ],
  openGraph: {
    title: "Carlaccidentes | Conectamos víctimas de accidentes con abogados especializados",
    description:
      "¿Tuviste un accidente? Te conectamos con abogados especializados. Sin costo inicial para ti.",
    type: "website",
    locale: "es_US",
    siteName: "Carlaccidentes",
    url: "https://www.carlaccidentes.com",
    images: [
      {
        url: "/images/carlaperfil.png",
        width: 1200,
        height: 630,
        alt: "Carlaccidentes — Carla Granda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlaccidentes | Abogados para víctimas de accidentes",
    description:
      "¿Tuviste un accidente? Sin costo inicial — te conectamos con el abogado correcto.",
    images: ["/images/carlaperfil.png"],
  },
  metadataBase: new URL("https://www.carlaccidentes.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        {children}
      </body>

      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </html>
  );
}
