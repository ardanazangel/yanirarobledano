"use client"; // Necesario para usar hooks en un componente del cliente
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import "../app/page.css";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ImageSection from "./components/ImageSection";

// Registra ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {

    gsap.fromTo(
      ".img-hero", // Selector de la clase
      {
        opacity: 1, // Totalmente transparente
        y: '0%', // Desplazado 100px hacia abajo
      },
      {
        y: '-20%', // Llega a su posición final
        opacity: 1, // Se hace visible
        duration: 1.5, // Duración de la animación
        rotate:-40,

        scrollTrigger: {
          trigger: ".hero", // El elemento que activa la animación
          start: "top top", // Comienza cuando el elemento está en el 80% de la ventana
          end: "bottom top", // Termina en el 50% de la ventana
          scrub: true, // Sincroniza la animación con el scroll
        },
      }
    );

    gsap.to(".title-hero", {
      y:'30%',
      duration: 1,
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.to(".projects-title", {
      width: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: ".projects",
        start: "top 110%",
        end: "top 10%",
        scrub: true,
      },
    });

    gsap.utils.toArray(".img-banner").forEach((element) => {
      gsap.fromTo(
        element,
        { y: "-20%" }, // Estado inicial
        {
          y: "20%", // Animación hacia la posición final
          scrollTrigger: {
            trigger: element, // Activa la animación por cada elemento
            start: "top 50%", // Cuando el elemento entra al 80% del viewport
            end: "bottom 0%", // Finaliza cerca del centro
            scrub: true, // Sin scrub, la animación ocurre una vez
          },
        }
      );
    });

  }, []);

  return (
    <div className="total-wrapper">
    <section className="hero">
      <div className="hero-img-container">
        <div className="img-hero">
          <img src="" alt="Yanira Robledano" />
        </div>
      </div>
      <h1 className="title-hero">
        Yanira <br /> Robledano
      </h1>
      <div className="hero-info">
        <p className="info-element">Diseñadora Gráfica </p>
        <p className="info-element">Portfolio ®2025</p>
      </div>
    </section>
    <AboutSection />
    <ImageSection />
    <ProjectsSection />
    </div>
  );
}
