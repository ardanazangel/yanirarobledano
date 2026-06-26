"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ImageSection() {
  useEffect(() => {
    gsap.fromTo(
      ".img-banner",
      { y: "-15%" }, // Estado inicial
      {
        y: "15%", // Animación hacia la posición final
        scrollTrigger: {
          trigger: ".banner-image", // Activa la animación por cada elemento
          start: "top 100%", // Cuando el elemento entra al 80% del viewport
          end: "bottom 0%", // Finaliza cerca del centro
          scrub: true, // Sin scrub, la animación ocurre una vez
        },
      }
    );
  });
  return (
    <>
      <div className="banner-image">
        <div className="img">
          <Image
            className="img-banner"
            src="/imgs/madamma-butterfly/cartel_opera.webp" // Fixed src path
            width={1920}
            height={1080}
            alt="Banner image"
          />
        </div>
      </div>
    </>
  );
}
