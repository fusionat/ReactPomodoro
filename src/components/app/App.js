import React, { Component } from "react";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import styles from "./app-style";
import Tomato from "../tomato";
import theme from "../theme/theme";
import AlignItemsList from "../list/list";
import TomatoIconList from '../tomato-icon/tomato-icon-list'

class App extends Component {
  render() {
    const { classes } = this.props;
    console.log(this.props);

    return (
      <MuiThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <div className={classes.root}>
            <TomatoIconList />
            <Tomato />
            <AlignItemsList />
          </div>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
