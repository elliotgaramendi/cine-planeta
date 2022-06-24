import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import { fetchAuthLoginSuccess } from "../redux/slices/auth.slices";
import { applicationName } from "../utils/generalInformation";
import '../styles/css/Cinemas.css';
import '../styles/scss/Cinemas.scss';

const CinemasLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if (userInfo) {
      dispatch(fetchAuthLoginSuccess(userInfo));
    }
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