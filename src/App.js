import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from "./components/Template/Template";

import Home from "views/Home/Home";
import Projects from "views/Projects/Projects";
import Gallery from "views/Gallery/Gallery";

function App() {
  return (
    <Router>
      <Template>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
