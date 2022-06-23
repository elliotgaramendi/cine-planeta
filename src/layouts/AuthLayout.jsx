import { Outlet } from "react-router-dom";
import AuthFooter from "../components/sections/AuthFooter";
import AuthHeader from "../components/sections/AuthHeader";
import { applicationName } from "../utils/generalInformation";

const AuthLayout = () => {
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