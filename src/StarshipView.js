import React from "react";
import { withRouter } from "react-router-dom";
import { getStarshipInfo } from "./helpers";
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
      films: [],
      starship: null
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    getStarshipInfo(this.props.match.params.id).then(result =>
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
    const { films, starship } = this.state;
    return (
      <div>
        {starship && <Typography variant="h2">{starship.name}</Typography>}
        <Grid direction="row" container spacing={24}>
          {starship && films && (
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
        </Grid>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CharacterView));
