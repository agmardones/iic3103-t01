import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestComponent from "./TestComponent";
import "./App.css";

const styles = {
  principal: {
    height: "100px"
  }
};

const Home = () => <h1> Home </h1>;

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={TestComponent} />
    </div>
  </Router>
);

export default withStyles(styles)(App);
