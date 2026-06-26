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
    if (window.matchMedia('(max-width: 750px)').matches) return;

    const lenis = new Lenis({});
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = document.getElementById("container");
    if (container) {
      container.classList.remove("page-out");
      container.style.animation = "none";
      container.offsetHeight; // reflow
      container.style.animation = "";
    }
    if (lenisRef.current) {
      lenisRef.current.stop();
      lenisRef.current.scrollTo(0, { immediate: true });
      setTimeout(() => {
        lenisRef.current.start();
        ScrollTrigger.refresh();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <div id="container">{children}</div>;
}
