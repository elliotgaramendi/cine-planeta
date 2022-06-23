// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
// import { auth } from "../configs/authFirebase";
import { applicationName } from "../utils/generalInformation";

const CinemasLayout = () => {
  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     console.log(currentUser);
  //   });
  // }, []);
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