import { useState } from "react";
import { db } from "../folos/firebase"; // importă inițializarea ta
import { collection, addDoc } from "firebase/firestore";

export default function QuestionForm() {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [text, setText] = useState("");

  const wordCount = text.trim().split(/\s+/).length;
  const charCount = text.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    await addDoc(collection(db, "questions"), {
      author: name || "Anonim",
      class: className,
      text,
      wordCount,
      charCount,
      answers: [],
    });

    setName("");
    setClassName("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-2xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-2">🧑‍🎓 Pune o întrebare!</h2>

      <input
        type="text"
        placeholder="Nume (opțional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />

      <input
        type="text"
        placeholder="Clasa (ex: 9A)"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />

      <textarea
        placeholder="Scrie întrebarea ta..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
      />

      <div className="text-sm text-gray-500 mb-2">
        {wordCount} cuvinte • {charCount} caractere
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Trimite
      </button>
    </form>
  );
}
