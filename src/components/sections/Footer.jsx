import { Link } from 'react-router-dom';
import '../../styles/scss/Footer.scss';

const Footer = ({ credits }) => {
  const { author, currentYear } = credits;

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <div className="footer-nav__container">
          <ul className="footer-nav__link-list">
            <li className="footer-nav__link-item">
              <a href="https://www.linkedin.com/in/elliotgaramendi/" className="footer-nav__link" target="_blank" rel="noopener noreferrer">
                Elliot
              </a>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Nosotros
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Trabaja con nosotros
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Ventas Corporativas
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Ver mi boleta electrónica
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Ver lista de productos permitidos
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Reglas de Convivencia
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Política de SST
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Política de Sostenibilidad
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Política de Diversidad e Inclusión
              </Link>
            </li>
            <li className="footer-nav__link-item">
              <Link to="/" className="footer-nav__link">
                Política de Privacidad
              </Link>
            </li>
          </ul>
          <div className="footer-nav__contact-container">
            <p className="footer-nav__contact-message">Síguenos si amas las películas o quieres enterarte de nuestras promociones, concursos y más.</p>
            <div className="footer-nav__contact-social-networks">
              <Link to="/" className="footer-nav__contact-social-network"><i className="bi bi-instagram"></i></Link>
              <Link to="/" className="footer-nav__contact-social-network"><i className="bi bi-youtube"></i></Link>
              <Link to="/" className="footer-nav__contact-social-network"><i className="bi bi-twitter"></i></Link>
              <Link to="/" className="footer-nav__contact-social-network"><i className="bi bi-meta"></i></Link>
            </div>
            <Link to="/" className="footer-nav__contact-link">
              <span><i className="bi bi-envelope"></i></span>
              <p className="footer-nav__contact-link-paragraph">Atención de consultas o incidencias por contáctanos.</p>
            </Link>
          </div>
          <div>
            <p>El universo Cineverse también está al alcance de tus dedos.</p>
            <div>
              <img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Disponible en Google Play" style={{ width: '100%' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Download_on_the_App_Store_Badge_ESMX_RGB_blk.svg/1280px-Download_on_the_App_Store_Badge_ESMX_RGB_blk.svg.png" alt="Descárgalo en el App Store" style={{ width: '100%' }} />
            </div>
            <div>
              <h4>Información pública de Cineverse:</h4>
              <p>
                Para acceder a nuestra información pública que se difunde en el portal del Mercado de Valores hacer click
                <Link to="/">aquí.</Link>
              </p>
            </div>
          </div>
        </div>
        <h2 className="footer-nav__credits">
          🦄Copyright &copy; {currentYear} <Link to="https://www.linkedin.com/in/elliotgaramendi/"
            className="footer-nav__credits-author" target="_blank" rel="noreferrer">{author}</Link> Todos los derechos
          reservados.🦄
        </h2>
      </nav>
    </footer>
  );
}

export default Footer;