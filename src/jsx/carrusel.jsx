import React from 'react';
import Slider from 'react-slick';
import '../css/carrusel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '..//img/banner.jpg';

const SimpleCarousel = () => {
  function CustomPrevArrow(props) {
    return (
      <div {...props} className="custom-prev-arrow">
        {'<'}
      </div>
    );
  }

  function CustomNextArrow(props) {
    return (
      <div {...props} className="custom-next-arrow">
        {'>'}
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      <div id='carrusel'>
        <header>
          Bodas
          <img src={img1} alt="Process Image" className="carousel-image" />
        </header>
      </div>
      <div>
        <header>
          Bodas
          <img src={img1} alt="Process Image" className="carousel-image" />
        </header>
      </div>
      <div>
        <header>
          Bodas
          <img src={img1} alt="Process Image" className="carousel-image" />
        </header>
      </div>
      <div>
        <header>
          Bodas
          <img src={img1} alt="Process Image" className="carousel-image" />
        </header>
      </div>
      
    </Slider>
  );
};

export default SimpleCarousel;