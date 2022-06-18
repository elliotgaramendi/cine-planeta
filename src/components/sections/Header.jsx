import '../../styles/scss/Header.scss';
import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = ({ applicationName }) => {
  let location = useLocation();
  const header = useRef();
  const headerNavMenuLinkListContainer = useRef();
  const headerNavThemeIconContainer = useRef();

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--dark');
    headerNavThemeIconContainer.current.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--dark')) {
      localStorage.setItem('darkMode', true);
    } else {
      localStorage.setItem('darkMode', false);
    }
  };

  const openMenu = () => {
    header.current.classList.add('header--open');
    headerNavMenuLinkListContainer.current.classList.add('header-nav__menu-link-list-container--open');
  };

  const closeMenu = () => {
    header.current.classList.remove('header--open');
    headerNavMenuLinkListContainer.current.classList.remove('header-nav__menu-link-list-container--open');
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false' || localStorage.getItem('darkMode') === null) {
      headerNavThemeIconContainer.current.classList.remove('header-nav__theme-icon-container--active');
    } else {
      headerNavThemeIconContainer.current.classList.add('header-nav__theme-icon-container--active');
    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      header.current.classList.add('header--home');
    } else {
      header.current.classList.remove('header--home');
    }
  }, [location]);

  return (
    <header
      className="header header--home"
      ref={header}
    >
      <nav className="header-nav">
        <div className="header-nav__container">
          <button
            className="header-nav__menu-icon-container"
            onClick={openMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header-nav__menu-icon" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          <Link
            to="/"
            className="header-nav__link-logo-container"
          >
            {applicationName}
          </Link>
          <div
            className="header-nav__menu-link-list-container"
            ref={headerNavMenuLinkListContainer}
            onClick={closeMenu}
          >
            <ul
              className="header-nav__menu-link-list"
              onClick={e => e.stopPropagation()}
            >
              <li
                className="header-nav__menu-link-item"
                onClick={closeMenu}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "header-nav__menu-link header-nav__menu-link--active" : "header-nav__menu-link"}
                >
                  Home
                </NavLink>
              </li>
              <li
                className="header-nav__menu-link-item"
                onClick={closeMenu}
              >
                <NavLink
                  to="/dulceria"
                  className={({ isActive }) => isActive ? "header-nav__menu-link header-nav__menu-link--active" : "header-nav__menu-link"}
                >
                  Dulcería
                </NavLink>
              </li>
              <li
                className="header-nav__menu-link-item"
                onClick={closeMenu}
              >
                <NavLink
                  to="/autenticacion/login"
                  className={({ isActive }) => isActive ? "header-nav__menu-link header-nav__menu-link--active" : "header-nav__menu-link"}
                >
                  Login
                </NavLink>
              </li>
              <li className="header-nav__menu-link-item">
                <a
                  href="https://www.linkedin.com/in/elliotgaramendi/"
                  className="header-nav__menu-link header-nav__menu-link--active" target="_blank"
                  rel="noopener noreferrer"
                >
                  Elliot
                </a>
              </li>
              <li
                className="header-nav__menu-link-item header-nav__menu-close-icon-container"
                onClick={closeMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header-nav__menu-close-icon" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </li>
            </ul>
          </div>
          <div className="header-nav__person-theme-container">
            <Link
              to="/autenticacion/login"
              className="header-nav__person-container"
            >
              <span className="header-nav__person-message">Únete</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="header-nav__person-icon" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </Link>
            <button
              className="header-nav__theme-icon-container"
              ref={headerNavThemeIconContainer}
              onClick={toggleTheme}
            >
              <span className="header-nav__theme-icon">🌚</span>
              <span className="header-nav__theme-icon">🌞</span>
            </button>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;