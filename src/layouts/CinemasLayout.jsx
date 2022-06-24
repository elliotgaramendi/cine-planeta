import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import { auth } from "../configs/authFirebase";
import { fetchAuthLoginSuccess } from "../redux/slices/auth.slices";
import { applicationName } from "../utils/generalInformation";

const CinemasLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(fetchAuthLoginSuccess(currentUser.reloadUserInfo));
    });
    // eslint-disable-next-line
  }, []);

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