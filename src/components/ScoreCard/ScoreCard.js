import React, { useContext } from "react";
import { QuizSessionContext } from "../../contexts/QuizSessionContext";

import Tile from "../Tile/Tile";

export default function ScoreCard() {
  // playerName: null,
  // state: "NEW",
  // totalQuestions: 0,
  // questionsAnswered: 0,
  // questionsCorrect: 0
  const quizSession = useContext(QuizSessionContext);
  const { questionsAnswered, questionsCorrect } = quizSession;

  return (
    <div className="flex justify-center pb-4 flex-col">
      <h1 className="text-4xl font-semibold text-center tracking-tight">
        Scorecard
      </h1>
      <div className="flex flex-col md:flex-row justify-center py-3">
        <Tile heading="Correct" value={questionsCorrect} />
        <Tile
          heading="Incorrect"
          value={questionsAnswered - questionsCorrect}
        />
        <Tile heading="Total Answered" value={questionsAnswered} />
      </div>
    </div>
  );
}
