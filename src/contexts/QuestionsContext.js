import React, { createContext, useState } from "react";
import seedQuestions from "../seeddata/questions";

export const QuestionsContext = createContext();

function QuestionsProvider(props) {
  const [questions] = useState([...seedQuestions]);

  return (
    <QuestionsContext.Provider value={[questions]}>
      {props.children}
    </QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
