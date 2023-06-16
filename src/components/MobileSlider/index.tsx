import React, { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './mobileSlider.scss';

interface MobileSliderProps {
  children: ReactNode;
}

interface SliderSettings extends Settings {
  dotsClass?: string;
  customPaging?: (index: number) => React.ReactElement;
}

const MobileSlider = ({ children }: MobileSliderProps) => {
  // Set up slider settings
  const settings: SliderSettings = {
    dotsClass: 'slick-dots slick-thumb test',
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
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default MobileSlider;
