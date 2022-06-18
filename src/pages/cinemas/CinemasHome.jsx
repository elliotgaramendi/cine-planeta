import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchReadPremieres } from "../../redux/slices/cinemas.slices";

const CinemasHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = '¡Bienvenido a Cineverse Perú!';
    dispatch(fetchReadPremieres());
    // eslint-disable-next-line
  }, []);

  return (<h1>Home</h1>);
};

export default CinemasHome;