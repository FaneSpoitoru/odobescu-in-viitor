import { useState } from "react";
import { db } from "../folos/firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

export default function AnswerForm({ questionId }) {
  const [answer, setAnswer] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!answer.trim()) return;

    const questionRef = doc(db, "questions", questionId);
    await updateDoc(questionRef, {
      answers: arrayUnion({ author: author || "Anonim", text: answer, likes: 0 }),
    });

    setAnswer("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        placeholder="Nume (opțional)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-1 rounded w-full mb-1"
      />
      <textarea
        placeholder="Răspunde la întrebare..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        className="border p-1 rounded w-full mb-1"
      />
      <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
        Răspunde
      </button>
    </form>
  );
}
