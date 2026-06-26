import "../components/navbar.css";
import TransitionLink from "./TransitionLink";

export default function Header() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <div className="navbar-link">
            <TransitionLink href="/" label="Yanira R." />
          </div>
        </li>
        <li className="navbar-item center">
          <div className="navbar-item-wrapper navbar-socials">
            <a className="navbar-link" href="https://www.instagram.com/robledano_/">
              Instagram,
              <div className="underline"></div>
            </a>
            <a className="navbar-link" href="https://www.linkedin.com/in/yanira-robledano-p%C3%A9rez-56805034b/">
              LinkedIn,
              <div className="underline"></div>
            </a>
            <a className="navbar-link" href="mailto:yanirarobledanoperez@gmail.com">
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
