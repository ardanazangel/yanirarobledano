"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import '@/app/page.css'
import { CustomEase } from "gsap/all";

CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function AboutSection() {
  useEffect(() => {

gsap.registerPlugin(ScrollTrigger);


    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    titles.chars;
    smallWords.words;

    const character = document.getElementsByClassName(".scroll-text")


    gsap.fromTo(
      ".scroll-text .line ",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.1,
        duration:1  ,
        ease:'power3.inOut',
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 75%",
          scrub: false,
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
