import React, { useEffect, useState } from "react";
import "../components/ProjectSection.css";

export default function ProjectsSection() {
  const [projectCount, setProjectCount] = useState(0); // Estado para guardar el número de proyectos

  useEffect(() => {
    // Contar los divs con clase "project-wrapper" después de que el DOM se haya renderizado
    const count = document.querySelectorAll(".project-wrapper").length;
    setProjectCount(count);
  }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

  return (
    <>
      <section className="projects">
        <div className="projects-title-wrapper">
          <div className="projects-title">
            <h2>Proyectos</h2>
            <h2 className="italic">
              ({String(projectCount).padStart(2, "0")})
            </h2>
          </div>
        </div>
        <div className="projects-grid">

          {/* Primer Proyecto */}  
          <div className="project-wrapper">
            <a className="project-link" href="/project">
              <div className="info-project">
                <div className="project-title">
                  <div className="title-with-tags">
                    <h3>Suppies</h3>
                    <div className="tags-wrapper">
                      <div className="tag">
                        <p>Branding</p>
                      </div>
                      <div className="tag">
                        <p>Packaging</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="plus-icon">+</h3>
                </div>
              </div>
              <div className="img project-img">
                <img src="https://images.unsplash.com/photo-1734000403582-da52e3699c0c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </a>
          </div>

          {/* Segundo Proyecto */} 

          <div className="project-wrapper">
            <a className="project-link" href="/project">
              <div className="info-project">
                <div className="project-title">
                  <div className="title-with-tags">
                    <h3>Suppies</h3>
                    <div className="tags-wrapper">
                      <div className="tag">
                        <p>Branding</p>
                      </div>
                      <div className="tag">
                        <p>Packaging</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="plus-icon">+</h3>
                </div>
              </div>
              <div className="img project-img">
                <img src="https://images.unsplash.com/photo-1734000403582-da52e3699c0c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </a>
          </div>

                    {/* Segundo Proyecto */} 
           
                    <div className="project-wrapper">
            <a className="project-link" href="/project">
              <div className="info-project">
                <div className="project-title">
                  <div className="title-with-tags">
                    <h3>Suppies</h3>
                    <div className="tags-wrapper">
                      <div className="tag">
                        <p>Branding</p>
                      </div>
                      <div className="tag">
                        <p>Packaging</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="plus-icon">+</h3>
                </div>
              </div>
              <div className="img project-img">
                <img src="https://images.unsplash.com/photo-1734000403582-da52e3699c0c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </a>
          </div>

                    {/* Segundo Proyecto */} 
           
                    <div className="project-wrapper">
            <a className="project-link" href="/project">
              <div className="info-project">
                <div className="project-title">
                  <div className="title-with-tags">
                    <h3>Suppies</h3>
                    <div className="tags-wrapper">
                      <div className="tag">
                        <p>Branding</p>
                      </div>
                      <div className="tag">
                        <p>Packaging</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="plus-icon">+</h3>
                </div>
              </div>
              <div className="img project-img">
                <img src="https://images.unsplash.com/photo-1734000403582-da52e3699c0c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </a>
          </div>

          {/* Terminan los proyectos */}  

        </div>
      </section>
    </>
  );
}
