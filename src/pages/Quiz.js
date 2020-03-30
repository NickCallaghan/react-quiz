import React, { useContext } from "react";
import Question from "../components/Question/Question";
import ScoreCard from "../components/ScoreCard/ScoreCard";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { QuizSessionContext } from "../contexts/QuizSessionContext";

export default function Quiz(props) {
  const [questions] = useContext(QuestionsContext);
  const quizSession = useContext(QuizSessionContext);
  const { playerName } = quizSession;
  return (
    <div className="bg-gray-200 pt-8 px-4 min-h-screen">
      <h1 className="text-4xl font-bold bg-indigo-200 rounded text-white px-4 text-center mb-4 shadow border-solid border border-indigo-500 border-dashed py-2">
        Welcome, {playerName || "Guest"}
      </h1>
      <h2 className="text-2xl text-4xl font-bold text-gray-900 leading-tight mb-8 text-center">
        Quiz from anywhere.
        <span className="text-indigo-500"> Built Using React</span>
      </h2>
      {questions.map(q => (
        <Question question={q} key={q.id} />
      ))}
      <ScoreCard />
    </div>
  );
}
