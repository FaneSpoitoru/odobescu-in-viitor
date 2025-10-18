import React from "react";
import Nav from "../componente/nav";
import '../pages_css/pareri.css';
import Footer from "../componente/footer";
import FormularPareri from "../componente/formularpareri";

  
function Pareri() {
  return (
    <div>
      <Nav />



       
      <h1>Părerile elevilor</h1>
      <p>Spune-ne ce părere ai despre orele și profesorii noștri!</p>

     
    
      <FormularPareri/>
      <Footer />
    </div>
  );
};

export default Pareri;