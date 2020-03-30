import React, { useState, useReducer } from "react";
import quizSessionReducer from "../reducers/quizSessionReducer";

export default function useQuizSession() {
  const initialQuizSession = {
    playerName: null,
    state: "NEW",
    totalQuestions: 0,
    questionsAnswered: 0,
    questionsCorrect: 0
  };
  const [quizSession, dispatch] = useReducer(
    quizSessionReducer,
    initialQuizSession
  );
  return [quizSession, dispatch];
}
