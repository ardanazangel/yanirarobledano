import "../components/navbar.css";
import TransitionLink from "./TransitionLink";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <div className="navbar-link" href="/">
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

          <div className="navbar-link" href="/proyectos">
          <TransitionLink href="/proyectos" label="Proyectos" />

            <div className="underline"></div>

          </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
