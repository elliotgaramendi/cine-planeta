import CinemasCard from "./CinemasCard";

const CinemasGallery = ({ premieres }) => {
  return (
    <section className="home-gallery">
      <div className="home-gallery__container">
        <h2 className="home-gallery__title">Películas</h2>
        <div className="home-gallery__cards-container">
          {premieres.map((premiere) => {
            return (
              <CinemasCard key={premiere.description} premiere={premiere} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CinemasGallery;