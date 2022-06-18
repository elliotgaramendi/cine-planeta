import '../../styles/scss/CinemasHome.scss';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CinemasSlider from "../../components/cinemas/CinemasSlider";
import { fetchReadPremieres } from "../../redux/slices/cinemas.slices";

const CinemasHome = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = '¡Bienvenido a Cineverse Perú!';
    dispatch(fetchReadPremieres());
    // eslint-disable-next-line
  }, []);

  return (
    <CinemasSlider />
  );
};

export default CinemasHome;