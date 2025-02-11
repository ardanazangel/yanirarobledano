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
          Madamma
          <br />
          Butterfly
        </h1>
        <div className="inner-project-tags">
          <ul className="inner-project-tags-list">
            <li className="project-list-item">
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Cliente</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">Académico</p>
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
                <p className="split-smalls load-text-anim-smalls">2023</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="inner-project-first-image">
        <Image
          src="/imgs/madamma-butterfly/caja_madamme.jpg"
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
                <a
                  href="https://www.instagram.com/robledano_/"
                  style={{ padding: "0.25rem 0rem", opacity: ".4" }}
                >
                  <p>Yanira Robledano</p>
                </a>
              </div>
              <div className="credits-item">
              </div>
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content">
          <h4>
            Este proyecto consiste en la creación de una identidad visual
            corporativa y elementos gráficos para la ópera Madama Butterfly,
            diseñando un universo de marca que refleja la esencia de la obra de
            Giacomo Puccini.
            <br />
          </h4>
          <p style={{ width: "100%" }}>
            <br />
            El concepto se basa en la historia de amor, dolor y tragedia de la
            protagonista, Madama Butterfly, cuya transformación emocional es
            representada simbólicamente como una mariposa. A través del diseño,
            se traduce esta evolución, desde la esperanza del amor hasta la
            desesperación, capturando la intensidad emocional y la fragilidad
            del personaje antes de su trágico desenlace.
          </p>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
        <Image
          src="/imgs/madamma-butterfly/bote_matcha.jpg"
          className="big-image"
          style={{filter:'brightness(.95)'}}
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          priority
        />
        </div>
        <div className="img">
        <Image
          src="/imgs/madamma-butterfly/caja_madame_detalle.jpg"
          className="big-image"
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          priority
        />
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
        <Image
          src="/imgs/madamma-butterfly/cartel_opera.jpg"
          className="big-image"
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          priority
        />
        </div>
      </div>
      <div className="inner-project-grid two-columns">
        <div className="img" style={{ aspectRatio: "3/4" }}>
        <Image
          src="/imgs/madamma-butterfly/vela.jpg"
          className="big-image"
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          style={{filter:'brightness(.95)'}}

          priority
        />
        </div>
        <div
          className="img"
          style={{ position: "relative", aspectRatio: "3/4" }}
        >
        <Image
          src="/imgs/madamma-butterfly/ilustracion_mariposas.jpg"
          className="big-image"
          width={1920}
          height={1080}
          alt="Carteles de la campaña Consejito de la Yaya"
          style={{filter:'brightness(.95)'}}

          priority
        />
        </div>
      </div>
    </div>
  );
}
