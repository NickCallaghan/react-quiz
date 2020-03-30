import React, { createContext } from "react";
import useQuizSession from "../hooks/useQuizSession";

export const QuizSessionContext = createContext();
export const DispatchContext = createContext();

function QuizSessionProvider(props) {
  const [quizSession, dispatch] = useQuizSession();

  return (
    <QuizSessionContext.Provider value={quizSession}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </QuizSessionContext.Provider>
  );
}

export default QuizSessionProvider;
