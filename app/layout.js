import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LayoutClient from "./LayoutClient";

// Metadatos (este archivo es del lado del servidor)
export const metadata = {
  title: "Yanira Robledano",
  description: "Portfolio Oficial de Yanira Robledano. Diseñadora gráfica.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  twitter: {
    card: "summary_large_image",
    title: "Yanira Robledano",
    description: "Portfolio Oficial de Yanira Robledano. Diseñadora gráfica.",
    images: ["https://next-learn-dashboard.vercel.sh/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <LayoutClient>
          
          {children}
          </LayoutClient>
        <Footer />
      </body>
    </html>
  );
}
