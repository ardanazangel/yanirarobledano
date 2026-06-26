"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import "../components/Footer.css";

export default function Footer() {
  useEffect(() => {
    if (window.matchMedia("(max-width: 750px)").matches) return;
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-wrapper",
        { y: "-60%" },
        {
          y: "0%",
          ease: "none",
          scrollTrigger: {
            trigger: ".footer-total-wrapper",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <section className="footer-total-wrapper">
      <div className="footer-wrapper">
        <h2>Hablemos!</h2>
        <a
          href="mailto:yanirarobledanoperez@gmail.com"
          rel="noopener noreferrer"
        >
          <h4>Gmail</h4>
        </a>
        <div className="footer-banner">
          <p>
            Made with love by{" "}
            <a
              href="https://www.instagram.com/angel.ardanaz/"
              style={{ zIndex: 100 }}
            >
              @angel.ardanaz
            </a>
          </p>
          <div className="footer-relevant">
            <p>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Yanira Robledano ®2026
              </a>
            </p>
            <p>
              <a href="/" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
