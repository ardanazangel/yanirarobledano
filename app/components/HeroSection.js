"use client";

import AboutImage from "./AboutImage";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import "@/app/page.css";

gsap.registerPlugin(ScrollTrigger);

// Registrar el plugin de GSAP
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function Hero() {
  useEffect(() => {
    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    titles.chars;
    smallWords.words;

    gsap.fromTo(
      ".load-text-anim .char",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        ease: "InOutQuart",
        duration: 1.5,
      }
    );

    gsap.fromTo(
      ".split-smalls .word",
      {
        y: "125%",
        opacity: 0,
      },
      {
        y: "0%",
        delay: 0.5,
        opacity: 1,
        stagger: 0.1,
        ease: "InOutQuart",
        duration: 1,
      }
    );


    gsap.to(".img-hero", {
      top: "70vh",
      rotate: "-20deg",
      ease: "InOutQuart",
      duration: 1.5,
      delay: 0.5,
    });

    gsap.fromTo(
      ".img-hero", // Selector de la clase
      {
        opacity: 1, // Totalmente transparente
        y: "0%", // Desplazado 100px hacia abajo
      },
      {
        y: "-20%", // Llega a su posición final
        opacity: 1, // Se hace visible
        duration: 1.5, // Duración de la animación
        rotate: -40,
        delay: 1.5,
        scrollTrigger: {
          trigger: ".hero", // El elemento que activa la animación
          start: "top top", // Comienza cuando el elemento está en el 80% de la ventana
          end: "bottom top", // Termina en el 50% de la ventana
          scrub: true, // Sincroniza la animación con el scroll
        },
      }
    );

    gsap.to(".title-hero", {
      y: "30%",
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });


  }, []);
  return (
    <section className="hero">
      <div className="hero-img-container">
        <div className="img-hero">
          <AboutImage />
        </div>
      </div>
      <h1 className="title-hero split-titles load-text-anim">
        Yanira <br />
        Robledano
      </h1>
      <div className="hero-info">
        <p className="info-element split-smalls">Diseñadora Gráfica </p>
        <p className="info-element split-smalls">Portfolio ®2025</p>
      </div>
    </section>
  );
}
