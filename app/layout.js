  import "./globals.css";
  import Footer from "./components/Footer";
  import Header from "./components/Header";
  import LayoutClient from "./LayoutClient";

  export const metadata = {
    title: "Yanira Robledano",
    description: "Portfolio Oficial de Yanira Robledano. Diseñadora gráfica.",
    keywords: "diseño gráfico, branding, ilustración, Yanira Robledano, portafolio",
    author: "Yanira Robledano",
    robots: "index, follow",
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
