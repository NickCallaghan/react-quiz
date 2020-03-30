import React, { useContext } from "react";
import Question from "../components/Question/Question";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import { QuestionsContext } from "../contexts/QuestionsContext";

export default function Quiz(props) {
  const [questions] = useContext(QuestionsContext);
  return (
    <div className="bg-gray-200 pt-8 px-4 min-h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
        Quiz from anywhere.
        <span className="text-indigo-500"> Built Using React</span>
      </h1>
      {questions.map(q => (
        <Question question={q} key={q.id} />
      ))}
      <ScoreCard />
    </div>
  );
}
