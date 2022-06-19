import { Link } from "react-router-dom";

const CinemasGallery = ({ premieres }) => {
  return (
    <section className="home-gallery">
      <div className="home-gallery__container">
        <h2 className="home-gallery__title">Películas</h2>
        <div className="home-gallery__cards-container">
          {premieres.map((premiere) => {
            const { description, image } = premiere;
            return (
              <div className="home-gallery__card-container">
                <img src={image} alt={description} className="home-gallery__card-image" loading="lazy" />
                <div className="home-gallery__card-extra">
                  <Link to="/autenticacion/login" className="home-gallery__card-buy">Comprar</Link>
                  <span className="home-gallery__card-description">{description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CinemasGallery;