import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GA_ID, PIXEL_ID } from "@/lib/gtag";

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

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </html>
  );
}
