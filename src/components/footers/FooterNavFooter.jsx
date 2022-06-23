import { Link } from "react-router-dom";
import { credits } from "../../utils/generalInformation";

const FooterNavFooter = () => {
  const { author, year } = credits;

  return (
    <nav className="footer-nav-footer footer-nav-footer--authentication">
      <div className="footer-nav-footer__container">
        <Link to="/" className="footer-nav-footer__subtitle">Condiciones de uso y seguridad</Link>
        <h5 className="footer-nav-footer__subtitle">Copyright &copy; {year} <a href="https://www.linkedin.com/in/elliotgaramendi/" className="footer-nav-footer__subtitle-author" target="_blank" rel="noopener noreferrer">{author}</a></h5>
        <Link to="/" className="footer-nav-footer__subtitle footer-nav-footer__subtitle--icon"><span className="footer-nav-footer__subtitle-icon"><i className="bi bi-book"></i></span> Libro de reclamaciones</Link>
      </div>
    </nav>
  );
};

export default FooterNavFooter;