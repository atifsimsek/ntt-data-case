import { Box, Container } from '@mui/material';
import Slider from 'react-slick';
import Image from 'mui-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './mainSlider.scss';
import { images } from './images';

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

const MainSlider = () => {
  // Set up slider settings
  const settings: SliderSettings = {
    customPaging: (index: number) => {
      return (
        <div key={index} className="dot">
          {''}
        </div>
      );
    },
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  //Styles for box
  const box = {
    position: 'absolute',
    width: '100%',
    height: '58px',
    background: 'rgba(19, 18, 18, 0.350)',
    bottom: -9,
    zIndex: 5,
    marginBottom: 1,
    backdropFilter: 'blur(4.5px)',
  };

  return (
    <>
      {/* Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              position: 'relative',
              width: '100%',
              height: '450px',
            }}
          >
            {/* Add a semi-transparent overlay on top of the image */}
            <Box
              sx={{
                ...box,
              }}
            />
            <Image
              style={{
                maxWidth: '100%',
                height: '100%',
                position: 'absolute',
                inset: 0,
                objectFit: 'cover',
              }}
              src={image}
            />
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default MainSlider;
