import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    textFamily: 'Book Antiqua',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  toolbar: {
    marginLeft: '170px',
  },
  search: {
    position: 'fixed',
    right: '20px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 100,
      '&:focus': {
        width: 300,
      },
    },
  },
}));

const ulist = {
    backgroundColor: '#212121',
    marginLeft: '238px',
    marginTop: '0px',
    marginBottom: '0px',
}

const listitem = {
    display: 'inline',
    listStyleType: 'none',
}

const aitem = {
    color: '#ffffff',
    fontWeight: '700',
    textDecoration: 'none',
    padding: '20px',
    display: 'inline-block',
    outline: '0',
}

const aaitem = {
    color: '#f44336',
    fontWeight: '700',
    textDecoration: 'none',
    padding: '20px',
    display: 'inline-block',
    outline: '0',
}

export default function SearchAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <h2 className={classes.title}>
              Magic: the Gathering - Card Database
            </h2>
            <ul style={ulist}>
              <li style={listitem}><NavLink exact to='/' style={aitem} activeStyle={aaitem}>Cards</NavLink></li>
              <li style={listitem}><NavLink to='/decks' style={aitem} activeStyle={aaitem}>Decks</NavLink></li>
              <li style={listitem}><NavLink to='/collection' style={aitem} activeStyle={aaitem}>Collection</NavLink></li>
            </ul>
          </Toolbar>
        </AppBar>
      </div>
  );
}


