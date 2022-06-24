import { Link } from "react-router-dom";

const CinemasCard = ({ premiere }) => {
  // const { description, image } = premiere;
  const { title, poster_path } = premiere;
  const imageEndpoint = `https://image.tmdb.org/t/p/w342${poster_path}`;

  return (
    <div className="home-gallery__card-container home-gallery__card-container--premiere">
      {/* <img src={image} alt={description} className="home-gallery__card-image" width="256" height="181" loading="lazy" /> */}
      <img src={imageEndpoint} alt={title} className="home-gallery__card-image" width="256" height="181" loading="lazy" />
      <div className="home-gallery__card-extra">
        <Link to="/autenticacion/login" className="home-gallery__card-buy"><i className="bi bi-film"></i> Comprar</Link>
        {/* <span className="home-gallery__card-description"><i className="bi bi-star"></i> {description}</span> */}
        <span className="home-gallery__card-description"><i className="bi bi-star"></i> {title}</span>
      </div>
    </div>
  );
};

export default CinemasCard;