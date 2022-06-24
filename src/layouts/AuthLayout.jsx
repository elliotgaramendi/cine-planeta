import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AuthFooter from "../components/sections/AuthFooter";
import AuthHeader from "../components/sections/AuthHeader";
import { fetchAuthLoginSuccess } from "../redux/slices/auth.slices";
import { applicationName } from "../utils/generalInformation";
import '../styles/scss/Auth.scss';

const AuthLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    if (userInfo) {
      dispatch(fetchAuthLoginSuccess(userInfo));
      navigate('/dulceria');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AuthHeader
        applicationName={applicationName}
      />
      <main className="main main--auth">
        <Outlet />
      </main>
      <AuthFooter />
    </>
  );
};

export default AuthLayout;