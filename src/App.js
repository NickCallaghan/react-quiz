import React, { useState } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import seedQuestions from "./seeddata/questions";

function App() {
  const [questions] = useState(seedQuestions);
  const header = (
    <div className="bg-indigo-700 text-xl white py-4 px-2 font-semibold uppercase text-white">
      Why Did the chicken cross the road?
    </div>
  );
  console.log(questions);
  const footer = (
    <span>
      <Button
        label="Save"
        icon="pi pi-check"
        style={{ marginRight: ".25em" }}
      />
      <Button
        label="Cancel"
        icon="pi pi-times"
        className="p-button-secondary"
      />
    </span>
  );

  return (
    <div className="bg-gray-200 pt-8 px-4 min-h-screen">
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-tight mb-8">
        Quiz from anywhere.
        <span className="text-indigo-500"> Built Using React</span>
      </h1>

      <Card footer={footer} header={header}>
        Content
      </Card>
    </div>
  );
}

export default App;
