"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import "../page.module.css";

import SplitType from "split-type";

import { CustomEase } from "gsap/CustomEase";

// Registrar el plugin de GSAP
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function MadammaButterfly() {
  useEffect(() => {
    const titles = new SplitType(".split-titles");
    const smallWords = new SplitType(".split-smalls");

    gsap.fromTo(
      ".load-text-anim .char",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.02,
        ease: "InOutQuart",
        duration: 1.5,
      }
    );

    gsap.fromTo(
      ".load-text-anim-smalls .word",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        ease: "InOutQuart",
        duration: 1,
        delay: 0.8,
      }
    );
  }, []);
  return (
    <div className="total-wrapper">
      <section className="inner-project-info">
        <h1 className="inner-project-title split-titles load-text-anim">
          Madamma
          <br />
          Butterfly
        </h1>
        <div className="inner-project-tags">
          <ul className="inner-project-tags-list">
            <li>
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Cliente</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">
                  Proyecto Personal
                </p>
              </div>
            </li>
            <li>
              <div id="year" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Lugar</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">Pamplona</p>
              </div>
            </li>
            <li>
              <div id="zone" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Año</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">2022</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="inner-project-first-image">
        <img src="/" className="big-image" />
      </section>
      <section className="inner-project-description">
        <div className="credits">
          <ul>
            <li>
              <div className="credits-item">
              <p className="bold">
                Diseño

              </p>
              <p>
                  <a href="https://www.instagram.com/robledano_/">
                    Yanira Robledano
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis tortor ligula, a pharetra ante dapibus vel. Cras sit amet cursus ex. Aliquam pharetra odio a odio tempor, sed fringilla nunc feugiat. In hac habitasse platea dictumst. Vivamus tristique metus at purus pellentesque volutpat. Quisque imperdiet, risus vitae tempus sagittis, erat tellus ullamcorper sapien, a mollis ex ipsum quis felis. Praesent viverra velit mauris, vel pretium augue efficitur a. Aliquam quis felis erat. Curabitur ac scelerisque purus, quis porttitor elit.</h4></div>
      </section>
    </div>
  );
}
