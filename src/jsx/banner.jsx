import React from 'react';
import '../css/banner.css'; 
import img1 from '../img/banner.jpg'; 

const Banner = () => {
  return (
    <div id='home'
    className="banner" style={{ backgroundImage: `url(${img1})` }}>
      <div className="text-banner">Salón X</div>
      <div className="text-slogan">Las mejores fiestas</div>
      <div className="button-container">
        <button className="btn-primary">Reservar ahora</button>
        <button className="btn-secondary">Más información</button>
      </div>
    </div>
  );
};

export default Banner;
