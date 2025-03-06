import styles from "./page.module.css";
import "../app/page.css";

import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ImageSection from "./components/ImageSection";
import Hero from "./components/HeroSection";

export default function Home() {
  return (
    <div className="total-wrapper">
      <section
        className="hero-mobile"
        style={{ display: "none", height: "100vh" }}
      >
        <div className="img-hero"></div>
      </section>
      <Hero />
      <AboutSection />
      <ImageSection />
      <ProjectsSection />
    </div>
  );
}
