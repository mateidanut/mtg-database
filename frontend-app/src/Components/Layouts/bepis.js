import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "1px",
    marginTop: "6px",
    marginBottom: "3px",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    textFamily: 'Book Antiqua',
    color: theme.palette.text.primary,
    marginTop: '0px',
  },
  text: {
    textFamily: 'Book Antiqua',
    color: theme.palette.text.secondary,
  },
}));


export default function () {
  const classes = useStyles();

  return (
      <div className={classes.root}>
      <Paper className='classes.paper'>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
      <Divider />
      </Paper>
      </div>
  );
}


