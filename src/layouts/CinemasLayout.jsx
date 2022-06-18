import { Outlet } from "react-router-dom";
import Header from "../components/sections/Header";

const CinemasLayout = () => {
  const applicationName = "🌌cineverse🌌";
  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };

  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        🦄Copyright &copy; {credits.year} <a href="https://www.linkedin.com/in/elliotgaramendi/" target="_blank" rel="noopener noreferrer">{credits.author}.</a> Todos los derechos reservados.🦄
      </footer>
    </>
  );
};

export default CinemasLayout;