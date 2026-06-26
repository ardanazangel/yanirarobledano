"use client"; // Este es un componente cliente
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function LayoutClient({ children }) {
  const lenisRef = useRef(null); // Referencia de Lenis
  const pathname = usePathname(); // Detectar ruta actual

  useEffect(() => {
    // Inicializa Lenis (scroll suave)
    const lenis = new Lenis({});

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
      lenisRef.current.stop()
      lenisRef.current.scrollTo(0, { immediate: true })
      setTimeout(() => {
        lenisRef.current.start()
        ScrollTrigger.refresh()
      }, 100);
    }
  }, [pathname]); // Escucha los cambios en la ruta

  return <>{children}</>; // Renderiza el contenido
}
