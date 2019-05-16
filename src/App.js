import React from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
/* import Datosgenerales from './views/Datosgenerales'; */
import Experiencia from './views/Experiencia';


function App() {
  return (
    <div>
      <Navbar/>
      <h1 align="center">¡Bienvenido!</h1>
      <Home/>
      
      <Experiencia/>
      <Footer/>
     
    </div>
  );
}

export default App;
