import React from 'react';
import Nav from '../componente/nav';
import Footer from '../componente/footer';
import '../pages_css/liceulintimp.css';
import Slideshow from '../componente/slideshow';



function LiceulInTimp() {
  return (
    <div>
      <Nav />
      <h1>Liceul în Timp</h1>
    <Slideshow />
      <Footer />
    </div>
  );
}
export default LiceulInTimp;