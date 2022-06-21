import { Link } from 'react-router-dom';
import '../../styles/scss/Footer.scss';

const Footer = ({ credits }) => {
  const { author, year } = credits;

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
                Ventas corporativas
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
                Reglas de convivencia
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
              <Link to="/" className="footer-nav__contact-social-network"><i className="bi bi-facebook"></i></Link>
            </div>
            <Link to="/" className="footer-nav__contact-link">
              <span className="footer-nav__contact-link-envelope"><i className="bi bi-envelope"></i></span>
              <p className="footer-nav__contact-link-message">Atención de consultas o incidencias por contáctanos.</p>
            </Link>
          </div>
          <div className="footer-nav__mobile-info">
            <div className="footer-nav__mobile">
              <p className="footer-nav__mobile-message">Cineverse también está al alcance de tus dedos.</p>
              <div className="footer-nav__mobile-image-container">
                <Link to="/" className="footer-nav__mobile-image-link"><img src="https://es.logodownload.org/wp-content/uploads/2019/06/disponible-en-google-play-badge-1.png" alt="Disponible en Google Play" className="footer-nav__mobile-image" /></Link>
                <Link to="/" className="footer-nav__mobile-image-link"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Download_on_the_App_Store_Badge_ESMX_RGB_blk.svg/1280px-Download_on_the_App_Store_Badge_ESMX_RGB_blk.svg.png" alt="Descárgalo en el App Store" className="footer-nav__mobile-image" /></Link>
              </div>
            </div>
            <div className="footer-nav__info">
              <h4 className="footer-nav__info-subtitle">Información pública de Cineverse:</h4>
              <p className="footer-nav__info-message">
                Para acceder a nuestra información pública que se difunde en el portal del Mercado de Valores hacer click <Link to="/" className="footer-nav__info-message-link">aquí.</Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <nav className="footer-nav-footer">
        <div className="footer-nav-footer__container">
          <Link to="/" className="footer-nav-footer__subtitle">Condiciones de uso y seguridad</Link>
          <h5 className="footer-nav-footer__subtitle">Copyright &copy; {year} <a href="https://www.linkedin.com/in/elliotgaramendi/" className="footer-nav-footer__subtitle-author" target="_blank" rel="noopener noreferrer">{author}</a></h5>
          <Link to="/" className="footer-nav-footer__subtitle footer-nav-footer__subtitle--icon"><span className="footer-nav-footer__subtitle-icon"><i className="bi bi-book"></i></span> Libro de reclamaciones</Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;