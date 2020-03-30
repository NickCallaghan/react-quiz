import React, { useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";

export default function Question(props) {
  const { questionText, answers, correctAnswer } = props.question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleChooseAnswer = answerIndex => {
    setSelectedAnswer(answerIndex);
    correctAnswer.indexOf(answerIndex) >= 0
      ? setIsCorrect(true)
      : setIsCorrect(false);
  };

  const header = (
    <div className="bg-indigo-700 text-xl white py-4 px-4 font-semibold text-white">
      {questionText}
    </div>
  );

  const footer = (
    // Conditionally renders the infobox showing if answer is correct once the question has been answered
    <div>
      {isCorrect !== null && (
        <div
          className={`${
            isCorrect ? "bg-green-500" : "bg-red-500"
          } py-1 px-2 text-white rounded`}
        >
          {isCorrect ? "Correct" : "Wrong Answer"}
        </div>
      )}
    </div>
  );

  return (
    <div className="mb-4">
      <Card header={header} footer={footer}>
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
