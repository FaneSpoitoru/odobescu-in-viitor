import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../folos/firebase";
import "../components_css/formularpareri.css";


export default function FormularPareri() {
  const [formData, setFormData] = useState({ name: "", className: "", message: "" });
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [expandedMessages, setExpandedMessages] = useState(new Set()); //  state pentru mesaje expandate

  useEffect(() => {
    const fetchMessages = async () => {
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const msgs = snapshot.docs.map(doc => doc.data());
      setMessages(msgs);
    };
    fetchMessages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setWordCount(value.trim().split(/\s+/).filter(Boolean).length);
      setCharCount(value.length);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = { ...formData, charCount, timestamp: new Date() };

    try {
      await addDoc(collection(db, "messages"), newMessage);
      setMessages(prev => [newMessage, ...prev]); 
      setFormData({ name: "", className: "", message: "" });
      setWordCount(0);
      setCharCount(0);
    } catch (err) {
      console.error("Eroare la salvare:", err);
    }
  };

  //  Toggle expand/collapse pentru un mesaj
  const toggleExpand = (index) => {
    setExpandedMessages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="formular-container">
      <h1>Completează acest formular pentru a-ți lăsa părerea</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label id="labelNume">Nume complet:</label>
          <br />
          <br />
          <input type="text" name="name" placeholder="Ex: Popescu Andrei" value={formData.name} onChange={handleChange} required />
        </div>
         
        <div className="form-group">
          <label>Clasa:</label>
          <br />
          <br />
          <input type="text" name="className" placeholder="Ex: 9B" value={formData.className} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Mesaj: </label>
          <br />
          <br />
          <textarea name="message" rows="4" placeholder="Scrie aici părerea ta..." value={formData.message} onChange={handleChange} required />
          <p className="word-count">Cuvinte: {wordCount} | Caractere: {charCount}</p>
        </div>

        <button type="button" className="submit-button-form" id="form-send" onClick={handleSubmit}>
          <span className="circle1"></span>
    <span className="circle2"></span>
    <span className="circle3"></span>
    <span className="circle4"></span>
    <span className="circle5"></span>
    <span className="text">Submit</span>
    
        </button>
      </form>

      <div className="parent">
        {/* Div-uri statice */}
        {/*<div className="div1">The folks at FreeAgent did a great job formatting their testimonial page...</div>
        <div className="div2">Clear Slide’s testimonial page is nested within their case studies home page...</div>
        <div className="div3">33333333333333333333333333 33333333333 ...</div>
        <div className="div4">4</div>
        <div className="div5">Another really cool, unique thing they do? Each client story module links to the client’s website...</div>
        <div className="div7">7</div>
        <div className="div8">8</div>
        <div className="div9">9</div>
        <div className="div10">10</div>
        <div className="div11">11</div>
        <div className="div12">12</div>
        <div className="div13">13</div>
        <div className="div14">14</div>*/}

        
        {messages.map((msg, index) => (
          <div
            className={`message-card ${expandedMessages.has(index) ? 'expanded' : ''}`}
            key={index}
            onClick={() => toggleExpand(index)}
          >
            <strong>{msg.name} ({msg.className})</strong>
            <p>{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}