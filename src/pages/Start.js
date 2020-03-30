import React, { useState, useContext } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DispatchContext } from "../contexts/QuizSessionContext";

export default function Start(props) {
  const dispatch = useContext(DispatchContext);
  const [input, setInput] = useState("");

  const handleStartQuiz = () => {
    if (input) {
      dispatch({ type: "AddPlayerName", playerName: input });
      props.history.push("/quiz");
    }
  };

  return (
    <div className="flex flex-col justify-center py-12 bg-indigo-300 min-h-screen">
      <h1 className="text-center font-bold text-4xl text-gray-100 mb-12">
        Welcome to{" "}
        <span className="text-indigo-500 border-indigo-500 border-solid border-4 px-3 mr-2 ml-1 py-0 inline-block">
          React
        </span>
        Quiz
      </h1>
      <form className="flex flex-col px-10">
        <InputText
          style={{ marginBottom: "1em" }}
          placeholder="Enter you name"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <Button onClick={handleStartQuiz} label="Start Quiz" type="submit" />
      </form>
    </div>
  );
}
