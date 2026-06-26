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

export const metadata = {
  title: "Yanira Robledano",
  description: "Portfolio Oficial de Yanira Robledano. Diseñadora gráfica.",
  keywords: "diseño gráfico, branding, ilustración, Yanira Robledano, portafolio",
  author: "Yanira Robledano",
  robots: "index, follow",
  favicon: "/favicon.ico",
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
