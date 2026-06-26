"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import Image from "next/image";
import BackgroundVideo from "@/app/components/BackgroundVideo";

gsap.registerPlugin(CustomEase);
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function ProjectPageClient({ project }) {
  useEffect(() => {
    document.querySelectorAll(".title-line").forEach(el => new SplitType(el, { types: 'chars' }));
    new SplitType(".split-smalls");

    gsap.fromTo(
      ".load-text-anim .char",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.02, ease: "InOutQuart", duration: 1.5 }
    );
    gsap.fromTo(
      ".load-text-anim-smalls .word",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, stagger: 0.05, ease: "InOutQuart", duration: 1, delay: 0.8 }
    );
  }, []);

  const creditGroups = project.credits.reduce((acc, c) => {
    if (c.label) {
      acc.push({ label: c.label, items: [{ name: c.name, href: c.href }] });
    } else if (acc.length > 0) {
      acc[acc.length - 1].items.push({ name: c.name, href: c.href });
    }
    return acc;
  }, []);

  return (
    <div className="total-wrapper">
      <section className="inner-project-info">
        <h1 className="inner-project-title load-text-anim">
          {project.title.split('\n').map((line, i) => (
            <span key={i} className="title-line" style={{ display: 'block' }}>{line}</span>
          ))}
        </h1>
        <div className="inner-project-tags">
          <ul className="inner-project-tags-list">
            <li className="project-list-item">
              <div id="client" className="inner-project-tag inner-tag-center">
                <p className="split-smalls load-text-anim-smalls"><strong>Cliente</strong></p>
                <p className="split-smalls load-text-anim-smalls">{project.meta.cliente}</p>
              </div>
            </li>
            <li className="project-list-item">
              <div id="year" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls"><strong>Lugar</strong></p>
                <p className="split-smalls load-text-anim-smalls">{project.meta.lugar}</p>
              </div>
            </li>
            <li className="project-list-item">
              <div id="zone" className="inner-project-tag">
                <p className="split-smalls load-text-anim-smalls"><strong>Año</strong></p>
                <p className="split-smalls load-text-anim-smalls">{project.meta.año}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="inner-project-first-image">
        <Image
          src={project.heroImage.src}
          className="big-image"
          width={1920}
          height={1080}
          alt={project.heroImage.alt}
          priority
        />
      </section>

      <section className="inner-project-description">
        <div className="credits">
          <ul>
            <li>
              {creditGroups.map((group, i) => (
                <div className="credits-item" key={i}>
                  <p className="bold">{group.label}</p>
                  {group.items.map((item, j) => (
                    <a key={j} href={item.href} style={{ padding: j === 0 ? "0.25rem 0rem" : "0", opacity: ".4" }}>
                      <p>{item.name}</p>
                    </a>
                  ))}
                </div>
              ))}
            </li>
          </ul>
        </div>
        <div className="inner-project-description-content">
          <h4>{project.descriptionH4}</h4>
          <p style={{ width: "100%" }}>
            {project.descriptionP.split("\n\n").map((block, i) => (
              <span key={i}>{i > 0 && <><br /><br /></>}{block}</span>
            ))}
          </p>
        </div>
      </section>

      {project.grids.map((grid, gi) => (
        <div key={gi} className={`inner-project-grid ${grid.columns}`}>
          {grid.items.map((item, ii) => (
            <div key={ii} className="img" style={item.wrapperStyle || {}}>
              {item.type === "video" ? (
                <BackgroundVideo src={item.src} />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1280}
                  height={1920}
                  style={item.style || {}}
                />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
