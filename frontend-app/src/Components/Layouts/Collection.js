import React, { PureComponent, Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, withStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const styles = theme => ({
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
});


const axios = require('axios');


class MyClass extends Component {

    getData() {
        axios.get('/statistics/collection')
            .then((response) => {
                this.setState(response.data);
            });
    }

    componentDidMount(){
        this.getData();
    }


  render() {
      const {classes} = this.props;

      if (this.state === null)
          return null
      else
        console.log(this.state);
          return (
              <div className={classes.root}>
              <Paper className={classes.paper}>


              <TableContainer component={Paper} >
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><h3>Name</h3></TableCell>
                        <TableCell><h3>Code</h3></TableCell>
                        <TableCell><h3>Card count</h3></TableCell>
                        <TableCell><h3>Release date</h3></TableCell>
                        <TableCell><h3>Basics</h3></TableCell>
                        <TableCell><h3>Commons</h3></TableCell>
                        <TableCell><h3>Uncommons</h3></TableCell>
                        <TableCell><h3>Rares</h3></TableCell>
                        <TableCell><h3>Mythic rares</h3></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[...Array(this.state[0].length).keys()].map((i) =>
                          <TableRow>
                            <TableCell><h3>{this.state[0][i][1]}</h3></TableCell>
                            <TableCell><h3>{this.state[0][i][0]}</h3></TableCell>
                            <TableCell><h3>{this.state[0][i][2]}</h3></TableCell>
                            <TableCell><h3>{new Date(this.state[0][i][3]).getDate()}/{new Date(this.state[0][i][3]).getMonth() + 1}/{new Date(this.state[0][i][3]).getFullYear()}</h3></TableCell>
                            <TableCell><h3>{this.state[1][i][0]}/{this.state[1][i][5]}</h3></TableCell>
                            <TableCell><h3>{this.state[1][i][1]}/{this.state[1][i][6]}</h3></TableCell>
                            <TableCell><h3>{this.state[1][i][2]}/{this.state[1][i][7]}</h3></TableCell>
                            <TableCell><h3>{this.state[1][i][3]}/{this.state[1][i][8]}</h3></TableCell>
                            <TableCell><h3>{this.state[1][i][4]}/{this.state[1][i][9]}</h3></TableCell>
                          </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
              </div>
          );
  }
}

export default withStyles(styles)(MyClass);

