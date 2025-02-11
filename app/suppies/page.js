"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import SplitType from "split-type";

import Image from "next/image";

import { CustomEase } from "gsap/CustomEase";

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
          Suppies
          <br/>
          <br/>

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
                <p className="split-smalls load-text-anim-smalls">2024</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="inner-project-first-image">
        <Image
          src="/imgs/suppies/botes-detalle.jpg"
          className="big-image"
          width={1920}
          height={1080}
          alt="Textura del empaque de Vda. de Manuel Redondo"
          priority
        />
      </section>
      <section className="inner-project-description">
        <div className="credits">
          <ul>
            <li>
              <div className="credits-item">
                <p className="bold">Diseño y Packaging</p>
                <a
                  href="https://www.instagram.com/robledano_/"
                  style={{ padding: "0.25rem 0rem", opacity: ".4" }}
                >
                  <p>Yanira Robledano</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content">
          <h4>
            Desde 1870, Legítimos Mazapanes Vda. de Manuel Redondo elabora
            mazapanes artesanales en Soto en Cameros, La Rioja. Con ingredientes
            seleccionados y métodos tradicionales, la marca refleja su
            compromiso con la calidad, la historia y la identidad regional.
            <br />
          </h4>
          <p style={{ width: "100%" }}>
            <br />
            Se identificó que la marca presentaba limitaciones en su diseño
            original, dificultando su implementación en las aplicaciones
            requeridas para este proyecto. Ante esta situación, se optó por un
            rediseño de su identidad visual. El rediseño modernizó una marca
            centenaria, capturando su tradición y artesanía en una identidad
            renovada que conecta con el consumidor actual. La nueva imagen
            combina elegancia, calidad y funcionalidad.
            <br />
            <br />
            El packaging se diseñó para transmitir la esencia artesanal de la
            marca, ofreciendo una experiencia sensorial completa. Se
            incorporaron texturas y materiales sostenibles como la piel de
            almendra o la cáscara de plátano. Este diseño refuerza el compromiso
            con la artesanía y la sostenibilidad, elevando la experiencia del
            consumidor.
            <br />
            <br />
            En un esfuerzo por ser sostenibles, se reutiliza la piel de
            almendra, un subproducto del proceso de producción, como material
            para el packaging. Esto no solo reduce el desperdicio, sino que
            también refuerza el compromiso de la marca con la economía circular
            y el respeto al medio ambiente.
          </p>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <Image
            src="/imgs/suppies/mango.jpg"
            width={1280}
            height={1920}
            alt="Bolsa y caja de mazapanes de Vda. de Manuel Redondo"
          />
        </div>
        <div className="img">
          <Image
            src="/imgs/suppies/coco.jpg"
            width={1280}
            height={1920}
            alt="Dos cajas de mazapanes de Vda. de Manuel Redondo"
          />
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
          <Image
            src="/imgs/suppies/personajes-finales.png"
            style={{ filter: "brightness(.95)", transform:'translateY(0%)' }}
            width={1280}
            height={1920}
            alt="Detalle del papel utilizado en el empaque de Vda. de Manuel Redondo"
          />
        </div>
      </div>
    </div>
  );
}
