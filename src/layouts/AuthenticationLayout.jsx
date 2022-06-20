import { Outlet } from "react-router-dom";

const AuthenticationLayout = () => {
  const applicationName = "🌌cineverse🌌";
  const credits = {
    year: new Date().getFullYear(),
    author: 'ELGS'
  };
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
}

export default AuthenticationLayout;