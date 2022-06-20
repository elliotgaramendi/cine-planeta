import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import { applicationName, credits } from "../utils/generalInformation";

const CinemasLayout = () => {
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