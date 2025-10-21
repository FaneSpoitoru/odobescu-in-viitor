import React from "react";
import { db2, storage2 } from "../folos/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // 👈
import '../components_css/formularCapsula.css';

function Formular() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const msj = document.getElementById("msj").value;
    const poze = document.getElementById("poze").files[0];

    if (!msj && !poze) {
      alert("Completează un câmp!");
      return;
    }

    try {
      let imageURL = null;

      // 🔥 dacă există o poză, o urcăm în Firebase Storage
      if (poze) {
  const formData = new FormData();
  formData.append('image', poze);

  const response = await fetch('https://api.imgbb.com/1/upload?key=7a29c0c30a3028d00f8b1c5a10b7fe00', {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  imageURL = data.data.url; // URL-ul generat de ImgBB
}


      // 📦 salvăm tot în Firestore
      await addDoc(collection(db2, "mesaje"), {
        msj,
        poze: imageURL, // link-ul către imagine
        timestamp: new Date().toISOString(),
      });

      alert("Trimis cu succes!");
      document.getElementById("msj").value = "";
      document.getElementById("poze").value = "";
    } catch (err) {
      if(poze.type !== "image/png" && poze.type !== "image/jpg" && poze.type !== "image/jpeg") {
        alert("Tipul fișierului nu este valid. Vă rugăm să încărcați o imagine PNG, JPG sau JPEG.");
        return;
      }
      else console.error("Eroare la trimitere: ", err);
    }
  };

  return (
    <div>
      <form className="capsula-form">
        <label htmlFor="msj" className="label-name" id="label-msj">Mesaj:</label><br />
        <input type="text" id="msj" name="msj" className="input-field" /><br />

        <label htmlFor="poze" className="label-name" id="label-poze">Adauga Poza<input type="file" id="poze" name="poze" className="input-field" /></label><br />
        
      
        <button type="button" className="submit-button-form" id="form-send" onClick={handleSubmit}>
          <span className="circle1"></span>
    <span className="circle2"></span>
    <span className="circle3"></span>
    <span className="circle4"></span>
    <span className="circle5"></span>
    <span className="text">Submit</span>
    
        </button>
      </form>
    </div>
  );
}

export default Formular;
