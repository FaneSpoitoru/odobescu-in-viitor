import React from "react";
import Nav from "../componente/nav";
import '../pages_css/pareri.css';
import Footer from "../componente/footer";

function Pareri() {
  return (
    <div>
      <Nav />
      


      <header>
        <h1>Părerile elevilor noștri</h1>
        <p>Ajută-ne să facem liceul un loc și mai bun! Scrie ce îți place și ce ai îmbunătăți.</p>
      </header>



<div className="app">
      <header className="header">
        <h1>Părerile elevilor</h1>
        <p>Spune ce ai îmbunătăți la liceu!</p>
      </header>

      <main className="main">
        {/* Formular */}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Numele tău (opțional)"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
          <input
            type="text"
            placeholder="Clasa / Promoția"
            value={clasa}
            onChange={(e) => setClasa(e.target.value)}
          />
          <textarea
            placeholder="Scrie părerea ta..."
            value={textParere}
            onChange={(e) => setTextParere(e.target.value)}
            required
          />
          <button type="submit">Trimite părerea</button>
        </form>

        {/* Lista de păreri */}
        <div className="pareri-lista">
          {pareri.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.nume}</h3>
              <p><em>{p.clasa}</em></p>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </main>

      
    </div>

      <div id="listaPareri">
        <h2>Părerile trimise:</h2>


      </div>


     

      <Footer/>
    </div>
  );
};

export default Pareri;