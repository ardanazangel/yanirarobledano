"use client";

import React from "react";
import "../components/ProjectSection.css";
import TransitionLinkSecond from "./TransitionLinkSecond";
import { useEffect } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import Image from "next/image";
import projectsData from "@/app/data/projects.json";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(CustomEase);

// Crear el easing personalizado
CustomEase.create("InOutQuart", "0.770, 0.000, 0.175, 1.000");

export default function ProjectsSection() {
  const projects = projectsData.map((p) => ({
    title: p.title.replace("\n", " "),
    tags: p.tags,
    imgUrl: p.listImg,
    link: `/proyectos/${p.slug}`,
  }));

  useEffect(() => {
    gsap.to(".projects-title", {
      width: "100%",
      duration: 1,
      ease: "InOutQuart",

      scrollTrigger: {
        trigger: ".projects",
        start: "top 60%",
        toggleActions: "restart pause restart reverse",
      },
    });
  }, []);

  return (
    <section className="projects">
      <div className="projects-title-wrapper">
        <div className="projects-title">
          <h2>Proyectos</h2>
          <h2 className="italic">
            ({String(projects.length).padStart(2, "0")})
          </h2>
        </div>
      </div>
      <div className="projects-grid">
        {/* Render dinámico de los proyectos */}
        {projects.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <TransitionLinkSecond href={project.link} />
            <div className="info-project">
              <div className="project-title">
                <div className="title-with-tags">
                  <h3>{project.title}</h3>
                  <div className="tags-wrapper">
                    {project.tags.map((tag, idx) => (
                      <div className="tag" key={idx}>
                        <p>{tag}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="plus-icon">+</h3>
              </div>
            </div>

            <div className="img project-img">
              <Image
                src={project.imgUrl}
                alt={project.title}
                width={1280}
                height={1920}
                style={{filter:'brightness(.95)', scale:'1.05'}}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
