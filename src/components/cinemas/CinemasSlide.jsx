import { Link } from "react-router-dom";

const CinemasSlide = ({ premiere }) => {
  const { description, image } = premiere;
  return (
    <div className="slick-slider__slide-container">
      <img src={image} alt={description} className="slick-slider__slide-image" />
      <div className="slick-slider__content">
        <h2 className="slick-slider__content-title">
          {description}
        </h2>
        <div className="slick-slider__content-details">
          Cuando sientas que no puedes continuar, cuando sientas que los sueños se te van, cuando creas que ya no hay más razón para luchar, mantener la fe y piensa en la razón por la cual te esforzaste hasta hoy y vuelve a intentar.
        </div>
        <Link to="/autenticacion/login" className="slick-slider__content-buy"><i class="bi bi-film"></i> Comprar</Link>
      </div>
    </div>
  );
};

export default CinemasSlide;