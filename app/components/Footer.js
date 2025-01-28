import "../components/Footer.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <h2>Hablemos!</h2>
      <a
        href="mailto:yanirarobledanoperez@gmail.com"
        rel="noopener noreferrer"
      >
        <h4>yanirarobledanoperez@gmail.com</h4>
      </a>
      <div className="footer-banner">
        <p>
          Diseño web por{" "}
          <a
            href="https://www.instagram.com/ardanaz.angel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ardanaz.angel
          </a>
        </p>
        <div className="footer-relevant">
          <p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Yanira Robledano ®2025
            </a>
          </p>
          <p>
            <a href="/" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </p>
        </div>
      </div>
  
    </div>
  );
}
