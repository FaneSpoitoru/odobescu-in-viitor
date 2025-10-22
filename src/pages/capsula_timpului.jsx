import React from "react";
import Nav from "../componente/nav";
import '../pages_css/capsula_timpului.css';
import Capsula from "../componente/capsula";
import Formular from "../componente/formular";
import Footer from "../componente/footer";



const CapsulaTimpului = () => {
  /*/sugestile elevilor*/
  return (
    <div>
      <Nav />
      <br />
      <br />
      <h1>Capsula Timpului</h1>
      <h2>Adauga un mesaj in capsula</h2>
      
      <Capsula />
      
      <Formular />

      <img src="capsula.png" alt="" />
      <Footer/>

      
    </div>
  );
};

export default CapsulaTimpului;
