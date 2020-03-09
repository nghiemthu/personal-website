import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Template from "./components/Template/Template";

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
