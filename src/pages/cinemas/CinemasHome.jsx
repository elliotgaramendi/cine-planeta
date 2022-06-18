import { useEffect } from "react";

const CinemasHome = () => {

  useEffect(() => {
    document.title = '¡Bienvenido a Cineverse Perú!';
  }, []);

  return (<h1>Home</h1>);
};

export default CinemasHome;