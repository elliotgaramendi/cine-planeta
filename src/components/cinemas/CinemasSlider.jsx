import Slider from "react-slick";
import CinemasSlide from "./CinemasSlide";

const CinemasSlider = ({ premieres }) => {
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

  return (
    <Slider {...settings}>
      {premieres.map((premiere) => {
        return (
          <CinemasSlide
            key={premiere.description}
            premiere={premiere}
          />
        );
      })}
    </Slider>
  );
};

export default CinemasSlider;