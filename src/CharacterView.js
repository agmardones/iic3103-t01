import React from "react";
import { withRouter } from "react-router-dom";

class CharacterView extends React.Component {
  render() {
    return <h1>{`Character: ${this.props.match.params.id}`}</h1>;
  }
}

export default withRouter(CharacterView);
