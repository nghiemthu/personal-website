import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Template from "./components/Template/Template";
import "./App.scss";

import Home from "views/Home/Home";
import Projects from "views/Projects/Projects";
import Gallery from "views/Gallery/Gallery";
import Skills from "views/Skills/Skills";
import Blogs from "views/Blogs/Blogs";
import Post from "views/Blogs/Post/Post";
import Contact from "views/Contact/Contact";

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

          <Route path="/skills">
            <Skills />
          </Route>

          <Route path="/blogs/:id">
            <Post />
          </Route>

          <Route path="/blogs">
            <Blogs />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Template>
    </Router>
  );
}

export default App;
