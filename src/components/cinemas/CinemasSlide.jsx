import { Link } from "react-router-dom";

const CinemasSlide = ({ premiere }) => {
  // const { description, image } = premiere;
  const { title, poster_path, overview } = premiere;
  const imageEndpoint = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <div className="slick-slider__slide-container">
      {/* <img src={image} alt={description} className="slick-slider__slide-image" width="100%" height="100%" loading="lazy" /> */}
      <img src={imageEndpoint} alt={title} className="slick-slider__slide-image" width="100%" height="100%" loading="lazy" />
      <div className="slick-slider__content">
        <h2 className="slick-slider__content-title">
          {/* {description} */}
          {title}
        </h2>
        <div className="slick-slider__content-details">
          {/* Cuando sientas que no puedes continuar, cuando sientas que los sueños se te van, cuando creas que ya no hay más razón para luchar, mantener la fe y piensa en la razón por la cual te esforzaste hasta hoy y vuelve a intentar. */}
          {overview}
        </div>
        <Link to="/autenticacion/login" className="slick-slider__content-buy"><i className="bi bi-film"></i> Comprar</Link>
      </div>
    </div>
  );
};

export default CinemasSlide;