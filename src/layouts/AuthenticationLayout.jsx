import { Outlet } from "react-router-dom";
import AuthenticationFooter from "../components/sections/AuthenticationFooter";
import AuthenticationHeader from "../components/sections/AuthenticationHeader";
import { applicationName, credits } from "../utils/generalInformation";

const AuthenticationLayout = () => {
  return (
    <>
      <AuthenticationHeader
        applicationName={applicationName}
      />
      <main className="main main--authentication">
        <Outlet />
      </main>
      <AuthenticationFooter
        credits={credits}
      />
    </>
  );
};

export default AuthenticationLayout;