import localFont from "next/font/local";
import "./globals.css";

const relais = localFont({
  src: [
    { path: "../public/fonts/RelaisDisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/RelaisDisplay-Light.woff2",   weight: "300", style: "normal" },
    { path: "../public/fonts/RelaisDisplay-LightItalic.woff2", weight: "300", style: "italic" },
  ],
  variable: "--font-relais",
});

const area = localFont({
  src: [
    { path: "../public/fonts/AreaNormal-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/AreaNormal-Bold.woff2",    weight: "700", style: "normal" },
  ],
  variable: "--font-area",
});

const siteUrl = "https://www.yanirarobledano.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yanira Robledano | Diseñadora gráfica",
    template: "%s | Yanira Robledano",
  },
  description:
    "Portfolio de Yanira Robledano, diseñadora gráfica especializada en branding, packaging, publicidad e ilustración.",
  keywords: [
    "Yanira Robledano",
    "diseñadora gráfica",
    "diseño gráfico",
    "branding",
    "packaging",
    "publicidad",
    "ilustración",
    "portfolio diseño gráfico",
  ],
  authors: [{ name: "Yanira Robledano" }],
  creator: "Yanira Robledano",
  publisher: "Yanira Robledano",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Yanira Robledano",
    title: "Yanira Robledano | Diseñadora gráfica",
    description:
      "Portfolio de Yanira Robledano, diseñadora gráfica especializada en branding, packaging, publicidad e ilustración.",
    images: [
      {
        url: "/imgs/imgs-inicio/PORT03.JPG",
        width: 1200,
        height: 800,
        alt: "Portfolio de Yanira Robledano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yanira Robledano | Diseñadora gráfica",
    description:
      "Portfolio de Yanira Robledano, diseñadora gráfica especializada en branding, packaging, publicidad e ilustración.",
    images: ["/imgs/imgs-inicio/PORT03.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${relais.variable} ${area.variable}`}>
      <body>{children}</body>
    </html>
  );
}
