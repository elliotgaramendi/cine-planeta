import '../../styles/scss/AuthenticationHeader.scss';
import { Link, useNavigate } from "react-router-dom";
import HeaderNavTheme from '../headers/HeaderNavTheme';

const AuthenticationHeader = ({ applicationName }) => {
  const navigate = useNavigate();
  return (
    <header className="authentication-header">
      <nav className="authentication-header-nav">
        <div className="authentication-header-nav__container">
          <button
            className="authentication-header-nav__back-button"
            onClick={() => navigate(-1)}
          >
            <span className="authentication-header-nav__back-button-icon"><i className="bi bi-chevron-left"></i></span>
            Atrás
          </button>
          <Link to="/" className="authentication-header-nav__home-logo">{applicationName}</Link>
          <HeaderNavTheme />
        </div>
      </nav>
    </header>
  );
};

export default AuthenticationHeader;