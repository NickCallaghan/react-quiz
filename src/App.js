import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/Quiz";

function App() {
  const routes = (
    <Switch>
      <Route
        exact
        path={`/`}
        render={routeProps => <Start {...routeProps} />}
      />
      <Route
        exact
        path={`/quiz`}
        render={routeProps => <Quiz {...routeProps} />}
      />
      <Route render={() => <div>Not Found</div>} />
    </Switch>
  );

  return <div>{routes}</div>;
}

export default App;
