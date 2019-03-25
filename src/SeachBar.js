import React from "react";
import {
  TextField,
  withStyles,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { getSearchBarInfo } from "./helpers";
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
      showingResults: false,
      films: [],
      starships: [],
      planets: [],
      characters: [],
      filteredData: []
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(urlString) {
    return e => {
      this.props.history.push(urlString);
    };
  }

  componentWillMount() {
    getSearchBarInfo().then(results => this.setState({ ...results }));
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
    const { showingResults, filteredData } = this.state;
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
            <List
              subheader={
                <ListSubheader disableSticky={true} component="div">
                  Resultados
                </ListSubheader>
              }
            >
              {filteredData.map((entity, idx) => (
                <ListItem
                  key={idx}
                  button
                  onClick={this.handleClick(entity.url)}
                >
                  <ListItemText primary={`${entity.name}`} />
                </ListItem>
              ))}
            </List>
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
