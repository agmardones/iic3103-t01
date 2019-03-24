import React from "react";
import { withStyles } from "@material-ui/core/";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FilmViewComponent from "./FilmView";
import Home from "./Home";
import "./App.css";

const styles = {
  principal: {
    height: "100px"
  }
};

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/films/:id" component={FilmViewComponent} />
    </div>
  </Router>
);

export default withStyles(styles)(App);
