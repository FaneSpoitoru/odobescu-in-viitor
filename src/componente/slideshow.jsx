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
     <p id="parf">I Trecutul</p>


    <div className="slideshow" style={{ maxWidth: "500px" }}>
      <img className="mySlides " src="./liceu/fatzada.jpg" style={{ width: "100%" }} alt="fatzada" />
      <img className="mySlides " src="./liceu/odo.jpg" style={{ width: "100%" }} alt="odo" />
      <img className="mySlides " src="./liceu/hol.jpg" style={{ width: "100%" }} alt="hol" />
      <img className="mySlides " src="./liceu/images.jpg" style={{ width: "100%" }} alt="images" />
    </div>

    <p id="parf">II Prezentul</p>


    <div className="slideshow2" style={{ maxWidth: "500px" }}>
      <img className="mySlides2 " src="./liceu/sala multimedia.jpg" style={{ width: "100%" }} alt="fatzada" />
      <img className="mySlides2 " src="./liceu/odo.jpg" style={{ width: "100%" }} alt="odo" />
      <img className="mySlides2 " src="./liceu/hol.jpg" style={{ width: "100%" }} alt="hol" />
      <img className="mySlides2 " src="./liceu/images.jpg" style={{ width: "100%" }} alt="images" />
    </div>

    <p id="parf">III Viitorul</p>


    <div className="slideshow3" style={{ maxWidth: "500px" }}>
      <img className="mySlides3 " src="./liceu/fatzada.jpg" style={{ width: "100%" }} alt="fatzada" />
      <img className="mySlides3 " src="./liceu/odo.jpg" style={{ width: "100%" }} alt="odo" />
      <img className="mySlides3 " src="./liceu/hol.jpg" style={{ width: "100%" }} alt="hol" />
      <img className="mySlides3 " src="./liceu/images.jpg" style={{ width: "100%" }} alt="images" />
    </div>

    </div>
  );
}
