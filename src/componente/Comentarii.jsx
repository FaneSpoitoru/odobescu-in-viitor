
import React, { useState, useEffect } from "react";

import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import Nav from "./nav.jsx";

export default function Comentarii() {
  const [comentariu, setComentariu] = useState("");
  const [comentarii, setComentarii] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "comentarii"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComentarii(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const trimiteComentariu = async (e) => {
    e.preventDefault();
    if (comentariu.trim() === "") return;
    await addDoc(collection(db, "comentarii"), {
      text: comentariu,
      timestamp: new Date()
    });
    setComentariu("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
        <Nav/>
      <h1>Exprimați-vă părerea</h1>
      <form onSubmit={trimiteComentariu}>
        <textarea
          value={comentariu}
          onChange={(e) => setComentariu(e.target.value)}
          placeholder="Scrie aici părerea ta..."
          style={{ width: "100%", height: "80px" }}
        />
        <br />
        <button type="submit" style={{ marginTop: "10px", padding: "10px 20px" }}>Trimite</button>
      </form>

      <h2>Comentarii:</h2>
      <div>
        {comentarii.map(c => (
          <div key={c.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
            {c.text}
          </div>
        ))}
      </div>
    </div>
  );
}
