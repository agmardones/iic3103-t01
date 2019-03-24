import React from "react";
import { withRouter } from "react-router-dom";

class StarshipView extends React.Component {
  render() {
    return <h1>{`Starship: ${this.props.match.params.id}`}</h1>;
  }
}

export default withRouter(StarshipView);
