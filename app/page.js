"use client"; // Necesario para usar hooks en un componente del cliente
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./page.module.css";
import "../app/page.css";
import SplitType from 'split-type'

import { CustomEase } from "gsap/CustomEase";

// Registrar el plugin de GSAP
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ImageSection from "./components/ImageSection";

// Registra ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {

    const titles = new SplitType('.split-titles')
    const smallWords = new SplitType('.split-smalls')

    titles.chars
    smallWords.words

    gsap.fromTo('.load-text-anim .char',{
      y:'100%',
      opacity:0,
    },{
      y:'0%',
      opacity:1,
      stagger: 0.05,
      ease: "InOutQuart",
      duration:1.5,
    })

    gsap.fromTo('.split-smalls .word',{
      y:'125%',
      opacity:0,
    },{
      y:'0%',
      delay:0.5,
      opacity:1,
      stagger: 0.1,
      ease: "InOutQuart",
      duration:1,
    })

    gsap.fromTo('.scroll-text-anim .char',{
      y:'50%',
      opacity:0,
    },{
      y:'0%',
      opacity:1,
      stagger: 0.1,
      duration:1.5,
      scrollTrigger: {
        trigger: '.scroll-text-anim',
        start:'top 90%',
        end: 'bottom 60%',
        scrub:true,
      }
    })

    gsap.to('.img-hero',{
      top:'70%',
      rotate:'-20deg',
      ease: "InOutQuart",
      duration:1.5,
      delay:0.5,
    })

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
        delay:1.5,
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

    gsap.to("span.letter",{
      y:'0%',
      stagger:0.05,
      duration: 1,
    })

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

    gsap.fromTo(
      ".img-banner",
      { y: "-25%" }, // Estado inicial
      {
        y: "25%", // Animación hacia la posición final
        scrollTrigger: {
          trigger: ".img-banner", // Activa la animación por cada elemento
          start: "top 50%", // Cuando el elemento entra al 80% del viewport
          end: "bottom 0%", // Finaliza cerca del centro
          scrub: true, // Sin scrub, la animación ocurre una vez
        },
      }
    );
  }, []);

  return (
    <div className="total-wrapper">
      <section className="hero">
        <div className="hero-img-container">
          <div className="img-hero">
            <img src="/" alt="Yanira Robledano" />
          </div>
        </div>
        <h1 className="title-hero split-titles load-text-anim">
          Yanira <br /> Robledano
        </h1>
        <div className="hero-info">
          <p className="info-element split-smalls">Diseñadora Gráfica </p>
          <p className="info-element split-smalls">Portfolio ®2025</p>
        </div>
      </section>
      <AboutSection />
      <ImageSection />
      <ProjectsSection />
    </div>
  );
}
