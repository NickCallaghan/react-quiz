import React, { useState, useContext } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DispatchContext } from "../contexts/QuizSessionContext";

export default function Start(props) {
  const dispatch = useContext(DispatchContext);
  const [input, setInput] = useState("");

  const handleStartQuiz = () => {
    console.log("start");
    dispatch({ type: "AddPlayerName", playerName: input });
    props.history.push("/quiz");
  };

  return (
    <div>
      <InputText value={input} onChange={e => setInput(e.target.value)} />

      <Button onClick={handleStartQuiz} label="Start" />
    </div>
  );
}
