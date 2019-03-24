import React from "react";
import {
  TextField,
  withStyles,
  Paper,
  Button,
  Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const styles = {
  results: {
    width: "100%"
  },
  button: {
    margin: 24,
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      color: "black"
    }
  }
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingResults: false
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleEnter(event) {
    if (event.key === "Enter") {
      this.setState({ showingResults: true });
      console.log(`Hay que buscar: ${event.target.value}`);
    }
  }
  handleClose() {
    this.setState({ showingResults: false });
  }
  render() {
    const { classes } = this.props;
    const { showingResults } = this.state;
    return (
      <div className={classes.resul}>
        <TextField
          onKeyPress={this.handleEnter}
          type="search"
          style={{ marginRight: 30 }}
          placeholder="Búsqueda"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        {showingResults && (
          <Paper>
            <Typography>Resultados de tu búsqueda:</Typography>
            <Button onClick={this.handleClose} className={classes.button}>
              {" "}
              Cerrar{" "}
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SearchBar));
