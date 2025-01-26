import "../components/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a className="navbar-link" href="/about">
            Yanira R.
          </a>
        </li>
        <li className="navbar-item center">
          <div className="navbar-item-wrapper navbar-socials">
            <a className="navbar-link" href="/projects">
              Instagram,
            </a>
            <a className="navbar-link" href="/projects">
              LinkedIn,
            </a>
            <a className="navbar-link" href="/projects">
              Gmail
            </a>
          </div>
        </li>
        <li className="navbar-item">
          <div className="navbar-item-wrapper navbar-pages">

          <a className="navbar-link" href="/contact">
            Sobre mí,
          </a>
          <a className="navbar-link" href="/contact">
            Proyectos
          </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
