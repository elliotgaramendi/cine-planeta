import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
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
      <Footer
        credits={credits}
      />
    </>
  );
};

export default CinemasLayout;