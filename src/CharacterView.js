import React from "react";
import { withRouter } from "react-router-dom";
import { getCharacterInfo } from "./helpers";
import {
  Typography,
  withStyles,
  ListItem,
  List,
  ListItemText,
  ListSubheader,
  Paper,
  Grid
} from "@material-ui/core";

const styles = {
  listRoot: {
    marginTop: 25,
    height: "300px",
    overflow: "scroll",
    paddingBottom: 20
  }
};

class CharacterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      films: [],
      character: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    getCharacterInfo(this.props.match.params.id).then(result =>
      this.setState({ ...result })
    );
  }
  handleClick(urlString) {
    return e => {
      this.props.history.push(urlString);
    };
  }

  render() {
    const { classes } = this.props;
    const { films, starships, character } = this.state;
    return (
      <div>
        {character && <Typography variant="h2">{character.name}</Typography>}
        <Grid direction="row" container spacing={24}>
          {character && films && (
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.listRoot}>
                <List
                  subheader={
                    <ListSubheader disableSticky={true} component="div">
                      Películas
                    </ListSubheader>
                  }
                >
                  {films.map((film, idx) => (
                    <ListItem
                      key={idx}
                      button
                      onClick={this.handleClick(film.url)}
                    >
                      <ListItemText primary={`${film.name}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
          {character && starships && (
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.listRoot}>
                <List
                  subheader={
                    <ListSubheader disableSticky={true} component="div">
                      Naves
                    </ListSubheader>
                  }
                >
                  {starships.map((starship, idx) => (
                    <ListItem
                      key={idx}
                      button
                      onClick={this.handleClick(starship.url)}
                    >
                      <ListItemText primary={`${starship.name}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CharacterView));
