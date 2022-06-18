const CinemasSlide = ({ premiere }) => {
  const { description, image } = premiere;
  return (
    <figure className="slick__slide-figure">
      <img src={image} alt={description} className="slick__slide-img" />
    </figure>
  );
};

export default CinemasSlide;