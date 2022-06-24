import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CinemasSlider from "../../components/cinemas/CinemasSlider";
import { fetchReadPremieres } from "../../redux/slices/cinemas.slices";
import CinemasGallery from '../../components/cinemas/CinemasGallery';
import CinemasPartner from '../../components/cinemas/CinemasPartner';
import useCinemas from '../../hooks/useCinemas';

const CinemasHome = () => {
  const dispatch = useDispatch();
  const { premieres } = useCinemas();

  useEffect(() => {
    document.title = '¡Bienvenido a Cineverse Perú!';
    window.scrollTo(0, 0);
    dispatch(fetchReadPremieres());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CinemasSlider premieres={premieres} />
      <CinemasGallery premieres={premieres} />
      <CinemasPartner />
    </>
  );
};

export default CinemasHome;