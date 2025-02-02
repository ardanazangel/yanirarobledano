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
          Vda. de Manuel
          <br />
          Redondo
        </h1>
        <div className="inner-project-tags">
          <ul className="inner-project-tags-list">
            <li className="project-list-item">
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Cliente</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">
                  Académico
                </p>
              </div>
            </li>
            <li className="project-list-item">
              <div id="year" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls">
                  <strong>Lugar</strong>
                </p>
                <p className="split-smalls load-text-anim-smalls">Logroño</p>
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
          src="/imgs/manuel-redondo/textura.jpg"
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
                  <h4>Yanira Robledano</h4>
                </a>
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
            compromiso con la artesanía y la economía circular.
          </h4>
        </div>
      </section>
      <div className="inner-project-grid two-columns">
        <div className="img">
          <Image
            src="/imgs/manuel-redondo/bolsa-mazapanes.webp"
            width={1280}
            height={1920}
            alt="Bolsa y caja de mazapanes de Vda. de Manuel Redondo"
          />
        </div>
        <div className="img">
          <Image
            src="/imgs/manuel-redondo/dos-cajas.webp"
            width={1280}
            height={1920}
            alt="Dos cajas de mazapanes de Vda. de Manuel Redondo"
          />
        </div>
      </div>
      <div className="inner-project-grid one-columns">
        <div className="img">
          <Image
            src="/imgs/manuel-redondo/foto-papel.jpg"
            style={{ filter: "brightness(1.1)" }}
            width={1280}
            height={1920}
            alt="Detalle del papel utilizado en el empaque de Vda. de Manuel Redondo"
          />
        </div>
      </div>
      <div className="inner-project-grid two-columns">
        <div className="img" style={{ aspectRatio: "3/4" }}>
          <Image
            src="/imgs/manuel-redondo/mazapanes-cerca.webp"
            style={{ filter: "brightness(1.1)" }}
            width={1280}
            height={1920}
            alt="Mazapanes de Vda. de Manuel Redondo en primer plano"
          />
        </div>
        <div
          className="img"
          style={{ position: "relative", aspectRatio: "3/4" }}
        >
          <Image
            src="/imgs/manuel-redondo/mazapanes.webp"
            style={{ filter: "brightness(.95)" }}
            width={1280}
            height={1920}
            alt="Mazapanes de Vda. de Manuel Redondo en empaque"
          />
        </div>
      </div>
    </div>
  );
}
