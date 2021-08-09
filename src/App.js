import React, { useState, useReducer } from "react";
import ReactDOM, { createPortal } from "react-dom";

import Home from "./Home";
import About from "./About";
import Error from "./Error";

import ReactBootstrap, {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Table,
  Button,
  Form,
  FormControl,
  Card,
  Carousel,
  Badge,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
