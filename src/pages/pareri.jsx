import React from "react";
import Nav from "../componente/nav";
import '../pages_css/pareri.css';
import Footer from "../componente/footer";
import FormularPareri from "../componente/formularpareri";

  
function Pareri() {
  return (
    <div>
      <Nav />

    <br />

       
      <h1>Părerile elevilor</h1>
      
      <br />
      <br />

     
    

      <Nav />    
      <FormularPareri/> 
      <Footer/>
    </div>
  );
};

export default Pareri;