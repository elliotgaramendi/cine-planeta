import { Outlet } from "react-router-dom";
import AuthenticationHeader from "../components/sections/AuthenticationHeader";
import { applicationName, credits } from "../utils/generalInformation";

const AuthenticationLayout = () => {
  const { year, author } = credits;

  return (
    <>
      <AuthenticationHeader
        applicationName={applicationName}
      />
      <main>
        <Outlet />
      </main>
      <footer>
        Copyright &copy; {year} {author}
      </footer>
    </>
  );
};

export default AuthenticationLayout;