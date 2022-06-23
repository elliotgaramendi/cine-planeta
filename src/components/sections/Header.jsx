import '../../styles/scss/Header.scss';
import { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import HeaderNavTheme from '../headers/HeaderNavTheme';

const Header = ({ applicationName }) => {
  let location = useLocation();
  const header = useRef();
  const headerNavMenuLinkListContainer = useRef();

  const openMenu = () => {
    header.current.classList.add('header--open');
    headerNavMenuLinkListContainer.current.classList.add('header-nav__menu-link-list-container--open');
  };

  const closeMenu = () => {
    header.current.classList.remove('header--open');
    headerNavMenuLinkListContainer.current.classList.remove('header-nav__menu-link-list-container--open');
  };

  const documentScroll = () => {
    if (location.pathname === '/') {
      header.current?.classList.toggle('header--home', window.scrollY < (window.innerHeight - 64));
    } else {
      header.current?.classList.remove('header--home');
    }
  };

  document.addEventListener('scroll', documentScroll);

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
            className="header-nav__menu-icon"
            onClick={openMenu}
          >
            <i className="bi bi-list"></i>
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
                className="header-nav__menu-link-item header-nav__menu-close-icon"
                onClick={closeMenu}
              >
                <i className="bi bi-x-circle"></i>
              </li>
            </ul>
          </div>
          <div className="header-nav__person-theme-container">
            <Link
              to="/autenticacion/login"
              className="header-nav__person-container"
            >
              <span className="header-nav__person-message">Únete</span>
              <i className="bi bi-person-circle"></i>
            </Link>
            <HeaderNavTheme />
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;