import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Columna 1 - Logo y descripción */}
        <div className="footer-section">
          <h3 className="footer-logo">TitansApp</h3>
          <p className="footer-description">
            Construyendo soluciones digitales innovadoras para hacer tu vida más fácil.
          </p>
        </div>

        {/* Columna 2 - Enlaces rápidos */}
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="footer-links">
            <li><a href="/">Inicio</a></li>
            <li><a href="/about">Nosotros</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 - Contacto */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="footer-contact">
            <li>📧 <a href="mailto:melissaberitan896@gmail.com">melissaberitan896@gmail.com</a></li>
            <li>📞 <a href="tel:+123456789">+123 456 789</a></li>
            <li>📍 Santiago de Cuba, Cuba</li>
          </ul>
        </div>

        {/* Columna 4 - Redes Sociales */}
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} TitansApp. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="/privacy">Política de Privacidad</a>
          <a href="/terms">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
}
