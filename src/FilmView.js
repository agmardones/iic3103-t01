import React from "react";
import { withRouter } from "react-router-dom";
import { getFilmInfo } from "./helpers";
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
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      characters: [],
      planets: [],
      starships: []
    };
  }

  componentWillMount() {
    getFilmInfo(this.props.match.params.id).then(response => {
      const { film, characters, planets, starships } = response;
      this.setState({ film, characters, planets, starships });
    });
  }

  render() {
    const { classes } = this.props;
    const { film, characters, planets, starships } = this.state;
    return (
      <div>
        {film && <Typography variant="h2">{film.title}</Typography>}
        <Grid direction="row" container spacing={24}>
          {film && characters && (
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.listRoot}>
                <List
                  subheader={
                    <ListSubheader disableSticky={true} component="div">
                      Personajes
                    </ListSubheader>
                  }
                >
                  {characters.map((char, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={`${char}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
          {film && planets && (
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.listRoot}>
                <List
                  subheader={
                    <ListSubheader disableSticky={true} component="div">
                      Planetas
                    </ListSubheader>
                  }
                >
                  {planets.map((planet, idx) => (
                    <ListItem key={idx}>
                      <ListItemText primary={`${planet}`} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          )}
          {film && starships && (
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
                    <ListItem key={idx}>
                      <ListItemText primary={`${starship}`} />
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

export default withRouter(withStyles(styles)(App));
