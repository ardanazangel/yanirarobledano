"use client"; // Este es un componente cliente
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function LayoutClient({ children }) {
  const lenisRef = useRef(null); // Referencia de Lenis
  const pathname = usePathname(); // Detectar ruta actual

  useEffect(() => {
    // Inicializa Lenis (scroll suave)
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical",
      smoothTouch: true,
      touchMultiplier: 0.5,
      duration: 2,
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
    // Cuando cambia la ruta, refresca ScrollTrigger y reinicia el scroll
    if (lenisRef.current) {
      lenisRef.current.stop(); // Detén el scroll temporalmente
      setTimeout(() => {
        lenisRef.current.start(); // Reactiva el scroll después de 100ms
        ScrollTrigger.refresh(); // Refresca ScrollTrigger después del cambio de página
      }, 100);
    }
  }, [pathname]); // Escucha los cambios en la ruta

  return <>{children}</>; // Renderiza el contenido
}
