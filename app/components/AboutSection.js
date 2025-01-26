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
        <h2 className="about-content">
          comunicar de manera <span className="italic">efectiva</span> a través
          del diseño
        </h2>
      </div>
    </section>
  );
}
