import { Outlet } from "react-router-dom";
import { applicationName, credits } from "../utils/generalInformation";

const AuthenticationLayout = () => {
  const { year, author } = credits;

  return (
    <>
      <header>
        {applicationName}
      </header>
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