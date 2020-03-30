import React, { createContext } from "react";
import useQuizSession from "../hooks/useQuizSession";

export const QuizSessionContext = createContext();

function QuizSessionProvider(props) {
  const [quizSession, updateQuizSession] = useQuizSession();
  return (
    <QuizSessionContext.Provider value={quizSession}>
      {props.children}
    </QuizSessionContext.Provider>
  );
}

export default QuizSessionProvider;
