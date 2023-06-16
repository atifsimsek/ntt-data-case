import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../ProductCard';
import './mobileSlider.scss';

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  customPaging?: (index: number) => React.ReactElement;
}

const MobileSlider = () => {
  // Set up slider settings
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      {/* Slider */}
      <Slider {...settings}>
        {Array.from({ length: 4 }).map((item, index) => (
          <div className="deneme">
            <ProductCard key={index} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MobileSlider;
