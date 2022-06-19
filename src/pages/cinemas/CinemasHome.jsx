import '../../styles/scss/CinemasHome.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CinemasSlider from "../../components/cinemas/CinemasSlider";
import { fetchReadPremieres } from "../../redux/slices/cinemas.slices";
import CinemasGallery from '../../components/cinemas/CinemasGallery';

const CinemasHome = () => {
  const dispatch = useDispatch();
  const { premieres } = useSelector(state => state.cinemasStore);

  useEffect(() => {
    document.title = '¡Bienvenido a Cineverse Perú!';
    dispatch(fetchReadPremieres());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CinemasSlider />
      <CinemasGallery premieres={premieres} />
    </>
  );
};

export default CinemasHome;