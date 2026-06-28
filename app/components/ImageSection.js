"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          <video
            className="img-banner"
            src="/video_portfolio.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Portfolio image sequence"
          />
        </div>
      </div>
    </>
  );
}
