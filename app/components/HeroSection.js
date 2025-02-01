"use client";

import AboutImage from "./AboutImage";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import "@/app/page.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function Hero() {
  useEffect(() => {
    // Asegurar que GSAP tiene control total sobre las animaciones
    const mm = gsap.matchMedia();

    // Asegúrate de que los elementos se dividan correctamente
    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    // Animación de las letras de .split-titles
    gsap.fromTo(
      titles.chars,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        ease: "InOutQuart",
        duration: 1.5,
      }
    );

    // Animación de las palabras de .split-smalls
    gsap.fromTo(
      smallWords.words,
      { y: "125%", opacity: 0 },
      {
        y: "0%",
        delay: 0.5,
        opacity: 1,
        stagger: 0.1,
        ease: "InOutQuart",
        duration: 1,
      }
    );

    // ANIMACIONES PARA ESCRITORIO (min-width: 751px)
    mm.add("(min-width: 751px)", () => {
      let tl = gsap.timeline();

      tl.to(".img-hero", {
        top: "70vh",
        rotate: "-20deg",
        ease: "InOutQuart",
        duration: 1.5,
        delay: 0.5,
      });

      tl.fromTo(
        ".img-hero",
        { opacity: 1, y: "0%" },
        {
          y: "-20%",
          opacity: 1,
          duration: 1.5,
          rotate: -40,
          delay: 1.5,
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      tl.to(".title-hero", {
        y: "30%",
        duration: 1,
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      return () => tl.kill(); // Limpiar animaciones al desmontar
    });

    // ANIMACIONES PARA MÓVIL (max-width: 750px)
    mm.add("(max-width: 750px)", () => {
      let tl = gsap.timeline();

      tl.to(".title-hero", {
        x: "-10%", // Se mueve ligeramente en scroll
        scrollTrigger: {
          trigger: ".title-hero-span",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to(".img-hero", {
        rotate: "-20deg",
        scrollTrigger: {
          trigger: ".title-hero-span",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      return () => tl.kill(); // Limpiar animaciones al desmontar
    });

    return () => mm.revert(); // Revertir todas las animaciones cuando el componente se desmonte
  }, []);

  return (
    <section className="hero">
      <div className="hero-img-container">
        <div className="img-hero">
          <AboutImage />
        </div>
      </div>
      <div className="hero-mobile-tracker">
        <h1 className="title-hero split-titles load-text-anim">
          <span className="title-hero-span">Yanira Robledano -</span>
          <span className="title-hero-span">Yanira Robledano -</span>
        </h1>
      </div>
      <h1 className="title-hero split-titles load-text-anim title-desktop">
        <span>Yanira</span>
        <span>Robledano</span>
      </h1>
      <div className="hero-info">
        <p className="info-element split-smalls">Diseñadora Gráfica</p>
        <p className="info-element split-smalls">Portfolio ®2025</p>
      </div>
    </section>
  );
}
