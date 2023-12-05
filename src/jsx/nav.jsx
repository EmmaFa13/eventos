import React, { useState } from 'react';
import '..//css/nav.css';
import logo from '..//img/logs.png';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSubMenuOpen(false);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="menu" onClick={toggleMenu}>
        ☰
      </div>
      <div className="center-content">
        <div className="title" onClick={() => scrollToSection('home')}>
          Salón
        </div>
      </div>
      {isMenuOpen && (
        <div className={`submenu ${isSubMenuOpen ? 'open' : ''}`}>
          <div className="submenu-item" onClick={() => scrollToSection('home')}>
            Inicio
          </div>
          <div className="submenu-item" onClick={() => scrollToSection('carrusel')}>
            Galería
          </div>
          <div className="submenu-item" onClick={() => scrollToSection('packages')}>
            Paquetes
          </div>
          <div className="submenu-item" onClick={() => scrollToSection('about')}>
            Contáctanos
          </div>
        </div>
      )}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Nav;
