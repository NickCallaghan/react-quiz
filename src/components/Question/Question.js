import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export default function Question(props) {
  const { questionText, answers } = props.question;

  const header = (
    <div className="bg-indigo-700 text-xl white py-4 px-2 font-semibold uppercase text-white">
      {questionText}
    </div>
  );

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
        <ol>
          {answers.map(a => (
            <li>{a}</li>
          ))}
        </ol>
      </Card>
    </div>
  );
}
