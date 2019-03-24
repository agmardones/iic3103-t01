import React from "react";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }

  render() {
    const filmId = this.props.match.params.id;
    return (
      <div>
        <h1> {`Film: ${filmId}`}</h1>
      </div>
    );
  }
}

export default withRouter(App);
