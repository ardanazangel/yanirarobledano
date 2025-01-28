import React from "react";
import "../components/ProjectSection.css";
import TransitionLinkSecond from "./TransitionLinkSecond";

export default function ProjectsSection() {
  // Datos dinámicos de los proyectos
  const projects = [
    {
      title: "Suppies",
      tags: ["Branding", "Packaging"],
      imgUrl:
        "https://images.unsplash.com/photo-1734000403582-da52e3699c0c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/project",
    },
    {
      title: "Madamma Butterfly",
      tags: ["UI/UX", "Web Design"],
      imgUrl:
        "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?q=80&w=1886&auto=format&fit=crop",
      link: "/madamma-butterfly",
    },
    {
      title: "Consejito de la Yaya",
      tags: ["Branding", "Publicidad", "Redes Sociales"],
      imgUrl:
        "/imgs/consejito-de-la-yaya/foto_mupi.jpg",
      link: "/consejito-de-la-yaya",
    },
    {
      title: "Vda. de Manuel Redondo",
      tags: ["Packaging", "Diseño"],
      imgUrl:
        "/imgs/manuel-redondo/logo.png",
      link: "/manuel-redondo",
    },
    {
      title: "Project Four",
      tags: ["Marketing", "SEO"],
      imgUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1886&auto=format&fit=crop",
      link: "/project-four",
    },
    {
      title: "Project Four",
      tags: ["Marketing", "SEO"],
      imgUrl:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=1886&auto=format&fit=crop",
      link: "/project-four",
    },
  ];

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
                <img src={project.imgUrl} alt={project.title} />
              </div>
            
          </div>
        ))}
      </div>
    </section>
  );
}
