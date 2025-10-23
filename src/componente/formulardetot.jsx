import { useEffect, useState } from "react";
import { db } from "../folos/firebase";
import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import AnswerForm from "./AnswerForm";

export default function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "questions"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setQuestions(data);
    });
    return unsubscribe;
  }, []);

  // funcția pentru like-uri
  const handleLike = async (questionId, answerIndex) => {
    const question = questions.find((q) => q.id === questionId);
    const updatedAnswers = [...question.answers];
    updatedAnswers[answerIndex].likes += 1;

    await updateDoc(doc(db, "questions", questionId), {
      answers: updatedAnswers,
    });
  };

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">💬 Întrebările bobocilor</h2>

      {questions.map((q) => (
        <div key={q.id} className="p-4 bg-gray-100 rounded-2xl mb-4 shadow">
          <p className="font-medium">{q.text}</p>
          <p className="text-sm text-gray-600 mt-1">
            — {q.author} ({q.class})
          </p>

          <div className="mt-3 pl-3 border-l-2 border-gray-300">
            {q.answers && q.answers.length > 0 ? (
              q.answers.map((a, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center mb-2 bg-white rounded-xl p-2"
                >
                  <div>
                    <p className="text-sm text-gray-800">
                      <strong>{a.author}:</strong> {a.text}
                    </p>
                  </div>
                  <button
                    onClick={() => handleLike(q.id, idx)}
                    className="flex items-center gap-1 text-red-500 hover:text-red-600"
                  >
                    ❤️ {a.likes}
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">
                Nimeni nu a răspuns încă 😅
              </p>
            )}
          </div>

          <AnswerForm questionId={q.id} />
        </div>
      ))}
    </div>
  );
}
