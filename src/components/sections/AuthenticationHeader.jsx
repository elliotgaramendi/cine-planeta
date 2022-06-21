import '../../styles/scss/AuthenticationHeader.scss';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from 'react';

const AuthenticationHeader = ({ applicationName }) => {
  const navigate = useNavigate();
  const themeIconContainer = useRef();

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--dark');
    themeIconContainer.current.classList.toggle('authentication-header-nav__theme-icon-container--active');

    if (body.classList.contains('body--dark')) {
      localStorage.setItem('darkMode', true);
    } else {
      localStorage.setItem('darkMode', false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false' || localStorage.getItem('darkMode') === null) {
      themeIconContainer.current.classList.remove('authentication-header-nav__theme-icon-container--active');
    } else {
      themeIconContainer.current.classList.add('authentication-header-nav__theme-icon-container--active');
    }
  }, []);

  return (
    <header className="authentication-header">
      <nav className="authentication-header-nav">
        <div className="authentication-header-nav__container">
          <button
            className="authentication-header-nav__back-button"
            onClick={() => navigate(-1)}
          >
            <span className="authentication-header-nav__back-button-icon"><i class="bi bi-chevron-left"></i></span>
            Atrás
          </button>
          <Link to="/" className="authentication-header-nav__home-logo">{applicationName}</Link>
          <button
            className="authentication-header-nav__theme-icon-container"
            ref={themeIconContainer}
            onClick={toggleTheme}
          >
            <span className="authentication-header-nav__theme-icon"><i className="bi bi-moon"></i></span>
            <span className="authentication-header-nav__theme-icon"><i className="bi bi-sun"></i></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default AuthenticationHeader;