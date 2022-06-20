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

  const documentScroll = () => {
    if (location.pathname === '/') {
      header.current?.classList.toggle('header--home', window.scrollY < (window.innerHeight - 64));
    } else {
      header.current?.classList.remove('header--home');
    }
  };

  document.addEventListener('scroll', documentScroll);

  useEffect(() => {
    // const intersectionObserverSection = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       if (entry.target.classList.contains('slick-slider')) {
    //         console.log('slider');
    //         header.current.classList.add('header--home');
    //       } else {
    //         console.log('not slider');
    //         header.current.classList.remove('header--home');
    //       }
    //     }
    //   });
    // }, { rootMargin: '-7.5% 0px -92.5% 0px' });

    // intersectionObserverSection.observe(document.querySelector('.home-gallery'));
    // intersectionObserverSection.observe(document.querySelector('.slick-slider'));

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
            <button
              className="header-nav__theme-icon-container"
              ref={headerNavThemeIconContainer}
              onClick={toggleTheme}
            >
              <span className="header-nav__theme-icon"><i className="bi bi-moon"></i></span>
              <span className="header-nav__theme-icon"><i className="bi bi-sun"></i></span>
            </button>
          </div>
        </div>
      </nav>
    </header >
  );
};

export default Header;