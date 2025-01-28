"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

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
          Vda. de Manuel
          <br />
          Redondo
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
                <p className="split-smalls load-text-anim-smalls">Logroño</p>
              </div>
            </li>
            <li>
              <div id="zone" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Año</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">2024</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="inner-project-first-image">
        <img src="/imgs/manuel-redondo/textura.jpg" className="big-image" />
      </section>
      <section className="inner-project-description">
        <div className="credits">
          <ul>
            <li>
              <div className="credits-item">
                <p className="bold">Diseño</p>
                <p>
                  <a href="https://www.instagram.com/robledano_/">
                    Yanira Robledano
                  </a>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content">
          <h4>
            Legítimos Mazapanes Vda. de Manuel Redondo, con más de 150 años de
            historia en Soto en Cameros, La Rioja, es sinónimo de tradición y
            calidad artesanal. Su identidad visual fue rediseñada para
            modernizar la marca, manteniendo su esencia histórica y conectando
            con el consumidor actual. El nuevo diseño combina elegancia,
            funcionalidad y sostenibilidad, utilizando materiales como la piel
            de almendra y la cáscara de plátano para el packaging, reflejando un
            compromiso con la artesanía y la economía circular.
          </h4>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <img src="/imgs/manuel-redondo/bolsa-mazapanes.webp"/>
        </div>
        <div className="img">
          <img src="/imgs/manuel-redondo/dos-cajas.webp"/>
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
          <img src="/imgs/manuel-redondo/foto-papel.jpg" style={{filter:'brightness(1.1)'}}/>
        </div>
      </div>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <img src="/imgs/manuel-redondo/mazapanes.webp" style={{filter:'brightness(.9)'}}/>
        </div>
        <div className="img">
          <img src="/imgs/manuel-redondo/mazapanes-cerca.webp"/>
        </div>
      </div>

    </div>
  );
}
