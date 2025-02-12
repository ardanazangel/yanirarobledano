import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LayoutClient from "./LayoutClient";

export const metadata = {
  title: "Yanira Robledano",
  description: "Portfolio Oficial de Yanira Robledano. Diseñadora gráfica.",
  keywords:
    "diseño gráfico, branding, ilustración, Yanira Robledano, portafolio",
  author: "Yanira Robledano",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="description" content="Portfolio Oficial de Yanira Robledano. Diseñadora gráfica." />
        <meta name="keywords" content="diseño gráfico, branding, ilustración, Yanira Robledano, portafolio" />
        <meta name="author" content="Yanira Robledano" />
        <meta name="robots" content="index, follow" />
      </head>
      <body>
        <Header />
        <LayoutClient>{children}</LayoutClient>
        <Footer />
      </body>
    </html>

  );
}
