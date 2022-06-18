import Slider from "react-slick";
import { useSelector } from "react-redux";
import CinemasSlide from "./CinemasSlide";

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
            <CinemasSlide
              key={premiere.description}
              premiere={premiere}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default CinemasSlider;