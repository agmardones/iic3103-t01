import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const styles = {
  root: {
    marginRight: "10px"
  }
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextField
        style={{ marginRight: 30 }}
        placeholder="Búsqueda"
        fullWidth
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
    );
  }
}

export default withRouter(withStyles(styles)(SearchBar));
