import React from "react";
import { db2, storage2 } from "../folos/firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // 👈

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
      console.error("Eroare la trimitere:", err);
      alert("Eroare la trimitere!");
    }
  };

  return (
    <div>
      <form className="artist-request-form">
        <label htmlFor="msj" className="label-name">Mesaj:</label><br />
        <input type="text" id="msj" name="msj" className="input-field" /><br />

        <label htmlFor="poze" className="label-name">Poza:</label><br />
        <input type="file" id="poze" name="poze" className="input-field" /><br />

        <button type="button" className="submit-button-form" onClick={handleSubmit}>
          Trimite Cererea
        </button>
      </form>
    </div>
  );
}

export default Formular;
