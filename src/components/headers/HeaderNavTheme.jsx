import { useEffect, useRef } from "react";

const HeaderNavTheme = () => {
  const refHeaderNavTheme = useRef();

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--dark');
    refHeaderNavTheme.current.classList.toggle('header-nav__theme--active');

    if (body.classList.contains('body--dark')) {
      localStorage.setItem('darkMode', true);
    } else {
      localStorage.setItem('darkMode', false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'false' || localStorage.getItem('darkMode') === null) {
      refHeaderNavTheme.current.classList.remove('header-nav__theme--active');
    } else {
      refHeaderNavTheme.current.classList.add('header-nav__theme--active');
    }
  }, []);

  return (
    <button
      className="header-nav__theme"
      ref={refHeaderNavTheme}
      onClick={toggleTheme}
    >
      <span className="header-nav__theme-icon"><i className="bi bi-moon"></i></span>
      <span className="header-nav__theme-icon"><i className="bi bi-sun"></i></span>
    </button>
  );
};

export default HeaderNavTheme;