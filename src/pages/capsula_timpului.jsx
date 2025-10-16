import React from "react";
import Nav from "../componente/nav";
import '../pages_css/capsula_timpului.css';
import Capsula from "../componente/capsula";

function CapsulaTimpului() {
  return (
    <div>
      <Nav />
      <h1>Capsula Timpului</h1>
      <h2>Adauga un mesaj in capsula</h2>
        <Capsula />
    </div>
  );
};

export default CapsulaTimpului;
