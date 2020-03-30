import React, { useState, useContext, useEffect } from "react";
import { DispatchContext } from "../../contexts/QuizSessionContext";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";

export default function Question(props) {
  const { questionText, answers, correctAnswer } = props.question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const dispatch = useContext(DispatchContext);

  const handleChooseAnswer = answerIndex => {
    setSelectedAnswer(answerIndex);
    correctAnswer.indexOf(answerIndex) >= 0
      ? setIsCorrect(true)
      : setIsCorrect(false);
  };

  useEffect(() => {
    if (isCorrect !== null) {
      dispatch({ type: "AnswerQuestion", isCorrect });
    }
  }, [isCorrect, dispatch]);

  const header = (
    <div className="bg-indigo-700 text-xl white py-4 px-4 font-semibold text-white">
      {questionText}
    </div>
  );

  const footer = () => {
    const correctClasses =
      "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative";
    const incorrectClasses =
      "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative";
    return (
      // Conditionally renders the infobox showing if answer is correct once the question has been answered
      <div>
        {isCorrect !== null && (
          <div
            className={`${
              isCorrect ? correctClasses : incorrectClasses
            } py-1 px-2 text-white rounded shadow`}
          >
            {isCorrect ? "Correct" : "Wrong Answer"}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="mb-4">
      <Card header={header} footer={footer()}>
        {answers.map((a, index) => (
          <div className="mb-2" key={`rb-${index}`}>
            <RadioButton
              checked={selectedAnswer === index ? true : false}
              disabled={isCorrect !== null}
              name={`answer-${index}`}
              value={index}
              onChange={e => handleChooseAnswer(e.value)}
            />
            <label
              htmlFor={`answer-${index}`}
              className="p-radiobutton-label ml-4"
            >
              {a}
            </label>
          </div>
        ))}
      </Card>
    </div>
  );
}
