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
    // Asegúrate de que los elementos se dividan correctamente
    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    // Animación de las letras de .split-titles
    gsap.fromTo(
      titles.chars, // Usamos titles.chars, ya que SplitType divide el texto en chars
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

    // Animación de las palabras de .split-smalls
    gsap.fromTo(
      smallWords.words, // Usamos smallWords.words para animar las palabras
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

    gsap.matchMedia().add("(min-width: 751px)", () => {
      // Animación de la imagen de héroe para escritorio
      gsap.to(".img-hero", {
        top: "70vh",
        rotate: "-20deg",
        ease: "InOutQuart",
        duration: 1.5,
        delay: 0.5,
      });
    
      gsap.fromTo(
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
      })

      gsap.matchMedia().add("(max-width: 750px)",()=>{

        
        gsap.to(".title-hero", {
          x: "-=10%", // Se mueve ligeramente hacia el lado opuesto al hacer scroll
          scrollTrigger: {
            trigger: ".title-hero-span",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }); 

        gsap.to(".img-hero", {
          rotate:'-20deg',
          scrollTrigger: {
            trigger: ".title-hero-span",
            start: "top bottom",
            end: "bottom top",
            rotate:'0deg',

            scrub: 1,
          }
        }); 
    

    });


    


  }, []);

  return (
    <section className="hero">
      <div className="hero-img-container">
        <div className="img-hero">
          <AboutImage />
        </div>
      </div>
      <div className="hero-mobile-tracker">
      <h1 className="title-hero split-titles load-text-anim ">
        <span className="title-hero-span">
        Yanira
        Robledano - 
        </span>
        <span className="title-hero-span">
        Yanira
        Robledano -
        </span>

      </h1>
      </div>
      <h1 className="title-hero split-titles load-text-anim title-desktop">
        <span>
        Yanira
        </span>
        <span>
        Robledano
        </span>
      </h1>
      <div className="hero-info">
        <p className="info-element split-smalls">Diseñadora Gráfica</p>
        <p className="info-element split-smalls">Portfolio ®2025</p>
      </div>
    </section>
  );
}
