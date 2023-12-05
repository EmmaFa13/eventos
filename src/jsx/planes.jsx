import React from 'react';
import '../css/planes.css'; 
import img1 from '..//img//banner.jpg';
const PlanesComponent = () => {
  
  const planes = [
    {
      title: 'Plan Básico',
      image: img1,
      description: 'Descripción del plan básico...',
    },
    {
        title: 'Plan Estándar',
        image: img1,
        description: 'Descripción del plan estándar...',
      },
      {
        title: 'Plan Estándar',
        image: img1,
        description: 'Descripción del plan estándar...',
      },
      {
        title: 'Plan Básico',
        image: img1,
        description: 'Descripción del plan básico...',
      },
      {
        title: 'Plan Básico',
        image: img1,
        description: 'Descripción del plan básico...',
      },
      {
        title: 'Plan Básico',
        image: img1,
        description: 'Descripción del plan básico...',
      },    
  
  ];

  return (
    <div id='packages'
     className="planes-container">
      <h2>Planes</h2>
      <div className="planes-grid">
        {planes.map((plan, index) => (
          <div key={index} className="plan-card">
            <img src={plan.image} alt={`Imagen ${plan.title}`} />
            <h3>{plan.title}</h3>
            <p>{plan.description}</p>
          </div>
        ))}
      </div>
      <button className="cotizar-button">Cotizar</button>
    </div>
  );
};

export default PlanesComponent;
