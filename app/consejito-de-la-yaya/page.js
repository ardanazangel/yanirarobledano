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
          Consejito de
          <br />
          la Yaya
        </h1>
        <div className="inner-project-tags">
          <ul className="inner-project-tags-list">
            <li>
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Cliente</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">
                  Proyecto Final
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
                <p className="split-smalls load-text-anim-smalls">2024</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="inner-project-first-image">
        <img src="/imgs/consejito-de-la-yaya/posters.png" className="big-image" />
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
            Este proyecto está dirigido a la Generación Z y a la denominada
            "Generación de Cristal", dos grupos influenciados por la
            digitalización, que ha transformado sus hábitos de comunicación y
            sus formas de relacionarse. <br />
            La campaña se articula en torno al claim “Consejito de la Yaya”, un
            concepto que utiliza la figura entrañable de una abuela como símbolo
            de confianza, tradición y sabiduría. Con un tono irónico, reflexivo
            y juvenil, la abuela ofrece consejos a los jóvenes desde una
            perspectiva cercana, conectando emocionalmente con el público
            objetivo. Esta propuesta no solo busca generar conciencia sobre los
            retos de la era digital, sino también invitar a estos jóvenes a la
            reflexión mediante un enfoque creativo que combina humor y valores.
          </h4>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
        <video autoPlay loop muted playsInline className="video">
            <source src="/imgs/consejito-de-la-yaya/reel-mensajes.mp4" type="video/mp4"/>
            {/* Fallback para navegadores que no soportan videos */}
            Tu navegador no soporta videos.
          </video>
        </div>
        <div className="img">
          <img src="/imgs/consejito-de-la-yaya/movil3.jpg" />
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
          <img
            src="/imgs/consejito-de-la-yaya/foto_mupi.jpg"
            style={{ filter: "brightness(1.1)" }}
          />
        </div>
      </div>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <video autoPlay loop muted playsInline className="video">
            <source src="/imgs/consejito-de-la-yaya/reel-carteles-comprimido.mp4" type="video/mp4"/>
            {/* Fallback para navegadores que no soportan videos */}
            Tu navegador no soporta videos.
          </video>
        </div>
        <div className="img">
        <video autoPlay loop muted playsInline className="video">
            <source src="/imgs/consejito-de-la-yaya/reel-recuerdos.mp4" type="video/mp4"/>
            {/* Fallback para navegadores que no soportan videos */}
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>
    </div>
  );
}
