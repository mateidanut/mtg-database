import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 6,
    marginBottom: 3,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default (props) => {
  const classes = useStyles();
  console.log(props);

  if (!props.cards)
    return null;
  else
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[0][1]}/${props.cards[0][0]}`}><img src={props.cards[0][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[1][1]}/${props.cards[1][0]}`}><img src={props.cards[1][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[2][1]}/${props.cards[2][0]}`}><img src={props.cards[2][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[3][1]}/${props.cards[3][0]}`}><img src={props.cards[3][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[4][1]}/${props.cards[4][0]}`}><img src={props.cards[4][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[5][1]}/${props.cards[5][0]}`}><img src={props.cards[5][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[6][1]}/${props.cards[6][0]}`}><img src={props.cards[6][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[7][1]}/${props.cards[7][0]}`}><img src={props.cards[7][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[8][1]}/${props.cards[8][0]}`}><img src={props.cards[8][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[9][1]}/${props.cards[9][0]}`}><img src={props.cards[9][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[10][1]}/${props.cards[10][0]}`}><img src={props.cards[10][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}><NavLink to={`/card/${props.cards[11][1]}/${props.cards[11][0]}`}><img src={props.cards[11][2]} height="350" alt=""/></NavLink></Paper>
          </Grid>
        </Grid>
      </div>
    );
}
