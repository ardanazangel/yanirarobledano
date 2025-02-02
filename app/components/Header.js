'use client'

import { useState, useEffect } from "react";
import "../components/navbar.css";
import TransitionLink from "./TransitionLink";

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHidden(true); // Oculta el header cuando haces scroll hacia abajo
      } else {
        setIsHidden(false); // Muestra el header cuando subes
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <div className="navbar-link">
            <TransitionLink href="/" label="Yanira R." />
          </div>
        </li>
        <li className="navbar-item center">
          <div className="navbar-item-wrapper navbar-socials">
            <a className="navbar-link" href="/projects">
              Instagram,
              <div className="underline"></div>
            </a>
            <a className="navbar-link" href="/projects">
              LinkedIn,
              <div className="underline"></div>
            </a>
            <a className="navbar-link" href="/projects">
              Gmail
              <div className="underline"></div>
            </a>
          </div>
        </li>
        <li className="navbar-item">
          <div className="navbar-item-wrapper navbar-pages">
            <div className="navbar-link">
              <TransitionLink href="/proyectos" label="Proyectos" />
              <div className="underline"></div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
