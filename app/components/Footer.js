'use client'

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

import "../components/Footer.css";

export default function Footer() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-wrapper",
        { y: "-50%" },
        {
          y: "0%",
          scrollTrigger: {
            trigger: ".footer-total-wrapper",
            start: "-25% bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    });

  }, []);

  return (
    <section className="footer-total-wrapper">
      <div className="footer-wrapper">
        <h2>Hablemos!</h2>
        <a href="mailto:yanirarobledanoperez@gmail.com" rel="noopener noreferrer">
          <h4>yanirarobledanoperez@gmail.com</h4>
        </a>
        <div className="footer-banner">
          <p>
            Made with love by{" "}
            <a href="https://www.instagram.com/ardanaz.angel/" target="_blank" rel="noopener noreferrer">
              @ardanaz.angel
            </a>
          </p>
          <div className="footer-relevant">
            <p>
              <a href="/" target="_blank" rel="noopener noreferrer">
                Yanira Robledano ®2025
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
