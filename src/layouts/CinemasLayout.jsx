import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import { applicationName } from "../utils/generalInformation";

const CinemasLayout = () => {
  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CinemasLayout;