import React from 'react';
import '../css/about.css';  

const PorQueElegirnosComponent = () => {
  const puntos = [
    'Experiencia en el mercado',
    'Atención al cliente personalizada',
    'Planes personalizables',
    'Profesionales calificados',

  ];

  return (
    <div id='about'
    className="por-que-elegirnos-container">
      <h2>Por qué elegirnos</h2>
      <ul className="puntos-lista">
        {puntos.map((punto, index) => (
          <li key={index}>{punto}</li>
        ))}
      </ul>
    </div>
  );
};

export default PorQueElegirnosComponent;
