import React from "react";
import ReactDOM from "react-dom";
import QuestionsProvider from "./contexts/QuestionsContext";
import QuizSessionProvider from "./contexts/QuizSessionContext";
import DispatchProvider from "./contexts/QuizSessionContext";
import { BrowserRouter } from "react-router-dom";

// CSS dependencies for App
import "./assets/main.css";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={"/react-quiz"}>
      <QuestionsProvider>
        <QuizSessionProvider>
          <App />
        </QuizSessionProvider>
      </QuestionsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
