import '../../styles/scss/AuthHeader.scss';
import { Link, useNavigate } from "react-router-dom";
import HeaderNavTheme from '../headers/HeaderNavTheme';

const AuthHeader = ({ applicationName }) => {
  const navigate = useNavigate();
  return (
    <header className="auth-header">
      <nav className="auth-header-nav">
        <div className="auth-header-nav__container">
          <button
            className="auth-header-nav__back-button"
            onClick={() => navigate(-1)}
          >
            <span className="auth-header-nav__back-button-icon"><i className="bi bi-chevron-left"></i></span>
            Atrás
          </button>
          <Link to="/" className="auth-header-nav__home-logo">{applicationName}</Link>
          <HeaderNavTheme />
        </div>
      </nav>
    </header>
  );
};

export default AuthHeader;