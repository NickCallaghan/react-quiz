import React, { useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";

export default function Question(props) {
  const { questionText, answers, correctAnswer } = props.question;
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const header = (
    <div className="bg-indigo-700 text-xl white py-4 px-2 font-semibold uppercase text-white">
      {questionText}
    </div>
  );

  const handleChooseAnswer = answerIndex => {
    setSelectedAnswer(answerIndex);
    correctAnswer.indexOf(answerIndex) >= 0
      ? setIsCorrect(true)
      : setIsCorrect(false);
  };

  // const footer = (
  //   <span>
  //     <Button
  //       label="Save"
  //       icon="pi pi-check"
  //       style={{ marginRight: ".25em" }}
  //     />
  //     <Button
  //       label="Cancel"
  //       icon="pi pi-times"
  //       className="p-button-secondary"
  //     />
  //   </span>
  // );

  return (
    <div className="mb-4">
      <Card header={header}>
        {answers.map((a, index) => (
          <div className="mb-2">
            <RadioButton
              checked={selectedAnswer === index ? true : false}
              inputId={index}
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
