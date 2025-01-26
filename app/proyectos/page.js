'use client'

import ProjectsSection from "../components/ProjectsSection";
import "../page.module.css";
import "../page.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function Proyectos() {
  useEffect(()=>{
    gsap.to('.projects-title',{
      width:'100%',
      delay:0.4,
      ease: "InOutQuart",
      duration:1,
    })
  },[])
  return (
    <div className="total-wrapper">
      <div className="big-spacer"></div>
      <ProjectsSection />
    </div>
  );
}
