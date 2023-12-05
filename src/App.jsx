import React from 'react'; 
import './App.css';
import Nav from '../src/jsx/nav'; 
import Banner from '..//src/jsx/banner';
import Carrousel from '..//src/jsx/carrusel';
import Planes from '..//src/jsx/planes';
import About from '../src/jsx/about.jsx';
import Footer from '../src/jsx/footer.jsx';
function App() {
  return (
    <div className="App">
     <Nav /> 
     <Banner />
     <Carrousel />
     <Planes/>
     <About/>
     <Footer/>
    </div>
  );
} 

export default App;

