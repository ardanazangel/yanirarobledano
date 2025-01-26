"use client"; // Necesario para usar hooks en un componente del cliente
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./globals.css";
import Navbar from "../app/components/navbar.js";
import Grid from "../app/components/grid.js";

export default function RootLayout({ children }) {
  useEffect(() => {
    // Inicializa Lenis
    const lenis = new Lenis({
      smooth: true, // Activa el scroll suave
      direction: "vertical", // Dirección del scroll
      smoothTouch: true, // Habilita el scroll suave en dispositivos táctiles
    });

    // Función de actualización de Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Limpia Lenis al desmontar el componente
    };
  }, []);

  return (
    <html lang="en">
      <body style={{ overflow: "hidden" }}>

        <Navbar />
        {children}
      </body>
    </html>
  );
}

