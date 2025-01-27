"use client"; // Necesario para usar hooks en un componente del cliente
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import "./globals.css";
import { usePathname } from "next/navigation"; // Detectar cambios de ruta
import Navbar from "./components/Navbar"; // Ruta corregida
import Footer from "./components/Footer"; // Verifica si Footer está en 'components'

export default function RootLayout({ children }) {
  const lenisRef = useRef(null); // Referencia de Lenis
  const pathname = usePathname(); // Detectar ruta actual

  useEffect(() => {
    // Inicializa Lenis (scroll suave)
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      smoothTouch: true,
      touchMultiplier: 0.5,
    });

    lenisRef.current = lenis;

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

  useEffect(() => {
    // Cada vez que cambie la ruta, desactiva el scroll durante 500ms
    if (lenisRef.current) {
      lenisRef.current.stop(); // Detén el scroll
      setTimeout(() => {
        lenisRef.current.start(); // Reactiva el scroll después de 500 ms
      }, 1500);
    }
  }, [pathname]); // Escucha los cambios en la ruta

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
