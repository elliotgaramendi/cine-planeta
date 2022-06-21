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
      <main className="main main--authentication">
        <Outlet />
      </main>
      <footer style={{ textAlign: 'center', padding: '1.5rem' }}>
        Copyright &copy; {year} {author}
      </footer>
    </>
  );
};

export default AuthenticationLayout;