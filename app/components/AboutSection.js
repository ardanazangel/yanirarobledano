"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import '@/app/page.css'


export default function AboutSection() {
  useEffect(() => {

gsap.registerPlugin(ScrollTrigger);


    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    titles.chars;
    smallWords.words;

    const character = document.getElementsByClassName(".scroll-text")


    gsap.fromTo(
      ".scroll-text  .char",
      {
        y: "50%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".scroll-text",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-content split-titles scroll-text">
          Comunicar de Manera <span className="italic">Efectiva</span> a Través
          del Diseño
        </h2>
      </div>
    </section>
  );
}
