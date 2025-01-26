'use client'

import { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  useEffect(() => {
  }, [])

  return (

    <section className="about">
      <div className="about-container">
        <h2 className="about-content split-titles scroll-text-anim">
          Comunicar de Manera <span className="italic">Efectiva</span> a Través
          del Diseño
        </h2>
      </div>
    </section>
  );
}
