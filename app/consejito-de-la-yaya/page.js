"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import SplitType from "split-type";

import Image from "next/image";

import { CustomEase } from "gsap/CustomEase";
import BackgroundVideo from "@/app/components/BackgroundVideo";

// Registrar el plugin de GSAP
gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function ProjectPage() {
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
            <li className="project-list-item">
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Cliente</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">
                  Proyecto Final
                </p>
              </div>
            </li>
            <li className="project-list-item">
              <div id="year" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Lugar</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">Pamplona</p>
              </div>
            </li>
            <li className="project-list-item">
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
        <Image 
          src="/imgs/consejito-de-la-yaya/posters.png" 
          className="big-image" 
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          priority
        />
      </section>
      <section className="inner-project-description">
        <div className="credits">
          <ul>
            <li>
              <div className="credits-item">
                <p className="bold">Diseño</p>
                <a href="https://www.instagram.com/robledano_/" style={{ padding: '0.25rem 0rem', opacity: '.4' }}>
                  <p>Yanira Robledano</p>
                </a>
              </div>
              <div className="credits-item">
                <p className="bold"><br />Tutorizado</p>
                <a href="#" style={{ paddingTop: '0.25rem', opacity: '.4' }}>
                  <p>Oier Irisarri</p>
                </a>
                <a href="#" style={{ opacity: '.4' }}>
                  <p>Nerea Simón</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content">
        <h4>
        Este proyecto está dirigido a la Generación Z y a la denominada "Generación de Cristal", dos grupos influenciados por la digitalización, que ha transformado sus hábitos de comunicación y sus formas de relacionarse.
            <br />
          </h4>
          <p style={{ width: "100%" }}>
            <br />
            La campaña se articula en torno al claim “Consejito de la Yaya”, un concepto que utiliza la figura entrañable de una abuela como símbolo de confianza, tradición y sabiduría. Con un tono irónico, reflexivo y juvenil, la abuela ofrece consejos a los jóvenes desde una perspectiva cercana, conectando emocionalmente con el público objetivo. Esta propuesta no solo busca generar conciencia sobre los retos de la era digital, sino también invitar a estos jóvenes a la reflexión mediante un enfoque creativo que combina humor y valores.

          </p>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <BackgroundVideo videoId="1052445975" />
        </div>
        <div className="img">
          <Image 
            src="/imgs/consejito-de-la-yaya/movil3.jpg" 
            width={1280}
            height={1920}
            alt="Mockup de un móvil mostrando la campaña Consejito de la Yaya"
          />
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
          <Image 
            src="/imgs/consejito-de-la-yaya/foto_mupi.jpg" 
            style={{ filter: "brightness(1.1)" }}
            width={1280}
            height={1920}
            alt="Mupi publicitario con diseño de la campaña Consejito de la Yaya"
          />
        </div>
      </div>
      <div className="inner-project-grid two-columns">
        <div className="img" style={{ aspectRatio: '3/4' }}>
          <BackgroundVideo videoId="1052444968" />
        </div>
        <div className="img" style={{ position: 'relative', aspectRatio: '3/4' }}>
          <BackgroundVideo videoId="1052449122" />
        </div>
      </div>
    </div>
  );
}
