import React, { useEffect } from "react";
import '../components_css/slideshow.css';



export default function Slideshow() {
  useEffect(() => {
    let myIndex = 0;
    const x = document.getElementsByClassName("mySlides");

    function carousel() {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) myIndex = 1;
      if (x[myIndex - 1]) x[myIndex - 1].style.display = "block";
      setTimeout(carousel, 5000);
    }

    carousel(); 
  }, []); 

useEffect(() => {
    let myIndex = 0;
    const x = document.getElementsByClassName("mySlides2");

    function carousel2() {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) myIndex = 1;
      if (x[myIndex - 1]) x[myIndex - 1].style.display = "block";
      setTimeout(carousel2, 5000);
    }

    carousel2(); 
  }, []);



  useEffect(() => {
    let myIndex = 0;
    const x = document.getElementsByClassName("mySlides3");

    function carousel3() {
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) myIndex = 1;
      if (x[myIndex - 1]) x[myIndex - 1].style.display = "block";
      setTimeout(carousel3, 5000);
    }

    carousel3(); 
  }, []);
  
  



  return (

    <div>
      <br />
      <br />
      <br />
      <br />
     
     
     <ul id="date">

      <h2 id="parf">I Trecutul</h2>
      <br />
       <li id="date-li">10 noiembrie 1919 S-au deschis la Pitești cursurile Școlii normale de Băieți, având 134 de elevi, instituție a cărei menire era pregătirea învățătorilor atât de necesari în condițiile făuririi României Mari.</li>
       <li id="date-li">6 octombrie 1920 Regele Ferdinand I al României a semnat Înaltul Decret nr. 4045, prin care s-a aprobat ca Școala Normală de la Pitești să poarte numele de „Alexandru Odobescu“.</li>
       <li id="date-li">1967 – 1968 În condițiile trecerii la învățământul liceal de 12 ani, instituția a primit titulatura de Liceul Nr. 3 „Alexandru Odobescu“.</li>   
       <li id="date-li">2012 Prin OMECTS de redenumire a unităților școlare colegiul nostru are o nouă denumire: COLEGIUL NAȚIONAL ‘ALEXANDRU ODOBESCU</li>
     
     
     <div className="slideshow" style={{ maxWidth: "500px" }}>
      <img className="mySlides " src="./liceu/fatzada.jpg" style={{ width: "100%" }} alt="fatzada" />
      <img className="mySlides " src="./liceu/odo.jpg" style={{ width: "100%" }} alt="odo" />
      <img className="mySlides " src="./liceu/hol.jpg" style={{ width: "100%" }} alt="hol" />
      <img className="mySlides " src="./liceu/images.jpg" style={{ width: "100%" }} alt="images" />
    </div>
     
     
     </ul>

    

    


    

<ul id="date">
    <h2 id="parf">II Prezentul</h2>
    <br />


    <li id="date-li">Colegiul este unul dintre cele mai respectate licee din Argeș, cu rezultate constante la olimpiade și examene.</li>
    <li id="date-li">Dispune de laboratoare moderne (informatică, fizică, chimie, biologie), o bibliotecă bogată și o curte renovată.</li>
    <li id="date-li">Elevii participă la proiecte Erasmus, activități culturale și campanii de voluntariat.</li>
    <li id="date-li">Profesorii pun accent pe gândire critică, creativitate și implicare socială.</li>


    <div className="slideshow2" style={{ maxWidth: "500px" }}>
      <img className="mySlides2 " src="./liceu/sala multimedia.jpg" style={{ width: "100%" }} alt="fatzada" />
      <img className="mySlides2 " src="./liceu/odo.jpg" style={{ width: "100%" }} alt="odo" />
      <img className="mySlides2 " src="./liceu/hol.jpg" style={{ width: "100%" }} alt="hol" />
      <img className="mySlides2 " src="./liceu/images.jpg" style={{ width: "100%" }} alt="images" />
    </div>
</ul>

<ul id="date"> 
    <h2 id="parf">III Viitorul</h2>
    <br />

    <li id="date-li">CNAO va deveni un spațiu complet digitalizat, unde tehnologia va fi prezentă în fiecare oră. Laboratoarele moderne și resursele online vor face învățarea mai interactivă și mai aplicată.</li>
    <li id="date-li">Colegiul va continua să colaboreze cu alte școli din Europa prin proiecte internaționale. Elevii vor învăța într-un mediu deschis, conectat și pregătit pentru viitor.</li>
    <li id="date-li">Elevii vor avea mai multe oportunități să își pună în practică ideile prin cluburi, proiecte și activități creative. CNAO va rămâne un loc unde inițiativa este încurajată și susținută.</li>
    <li id="date-li">Tradiția și valorile colegiului vor fi păstrate, dar integrate într-o viziune modernă. CNAO va continua să fie un simbol al seriozității, respectului și performanței, adaptat noilor generații.</li>

    <div className="slideshow3" style={{ maxWidth: "500px" }}>
      <img className="mySlides3 " src="./liceu/viitor1.jpg" style={{ width: "100%" }} alt="viitor1" />
      <img className="mySlides3 " src="./liceu/viitor2.jpg" style={{ width: "100%" }} alt="viitor2" />
      <img className="mySlides3 " src="./liceu/viitor3.jpg" style={{ width: "100%" }} alt="viitor3" />
      <img className="mySlides3 " src="./liceu/viitor4.jpg" style={{ width: "100%" }} alt="viitor4" />
    </div>
</ul>
    </div>

  );
}
