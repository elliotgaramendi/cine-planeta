import Slider from "react-slick";
import { useSelector } from "react-redux";

const CinemasSlider = () => {
  const settings = {
    accessibility: true,
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 854,
        settings: {
          arrows: false
        }
      }
    ],
  };

  const { premieres } = useSelector(state => state.cinemasStore);

  return (
    <div>
      <Slider {...settings}>
        {premieres.map((premiere) => {
          return (
            <figure key={premiere.description} className="slick__slide-figure">
              <img src={premiere.image} alt={premiere.description} className="slick__slide-img" />
            </figure>
          );
        })}
      </Slider>
    </div>
  );
};

export default CinemasSlider;