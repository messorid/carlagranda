import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Carla Granda | Conectamos víctimas de accidentes con abogados especializados",
  description:
    "¿Tuviste un accidente? Te conectamos con abogados especializados en accidentes para que recibas la indemnización que mereces. Sin costo inicial para ti.",
  keywords: [
    "accidente de auto",
    "accidente de trabajo",
    "indemnización por accidente",
    "abogado de accidentes",
    "negligencia médica",
    "accidente de motocicleta",
    "resbalón y caída",
    "Carla Granda",
  ],
  openGraph: {
    title: "Carla Granda | Conectamos víctimas de accidentes con abogados especializados",
    description:
      "¿Tuviste un accidente? Te conectamos con abogados especializados. Sin costo inicial para ti.",
    type: "website",
    locale: "es_US",
    siteName: "Carla Granda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carla Granda | Abogados para víctimas de accidentes",
    description:
      "¿Tuviste un accidente? Sin costo inicial — te conectamos con el abogado correcto.",
  },
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
      <body className="min-h-full flex flex-col bg-bg text-text">{children}</body>
    </html>
  );
}
