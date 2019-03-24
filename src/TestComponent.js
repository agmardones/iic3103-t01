import React from "react";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  componentWillMount() {
    fetch("https://swapi.co/api/people/1")
      .then(response => {
        return response.json();
      })
      .then(empleados => {
        this.setState({ info: empleados });
      });
  }

  render() {
    console.log(this.state);
    console.log(this.props.match.params.id);
    return <h1> Test Component</h1>;
  }
}

export default withRouter(App);
