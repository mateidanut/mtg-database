import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 6,
    marginBottom: 3,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    textFamily: 'Book Antiqua',
    color: theme.palette.text.primary,
  },
  text: {
    textFamily: 'Book Antiqua',
    color: theme.palette.text.secondary,
  },
});

const axios = require('axios');

class OneCard extends PureComponent {
    getData() {
        axios.get(`/card/${this.props.match.params.card_exp}/${this.props.match.params.card_no}`)
            .then((response) => {
                this.setState(response.data);
                console.log(`/buy/${this.props.match.params.card_exp}/${this.props.match.params.card_no}`);
            });
    }


      handleClick = () => {
        console.log(`/buy/${this.props.match.params.card_exp}/${this.props.match.params.card_no}`);
        axios.get(`/buy/${this.props.match.params.card_exp}/${this.props.match.params.card_no}`)
            .then((response) => {
              window.location.reload();
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
        return (
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid item xs>
                <Paper className={classes.paper}>
                  <h1>{this.state[0][0]}</h1>
                  <img src={this.state[0][4]} height="674" alt=""/>
                </Paper>
              </Grid>
              <Grid item xs>
                <Paper className={classes.paper}>
                    <TableContainer component={Paper} >
                      <Table aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Type:</h3></TableCell>
                            <TableCell><h3>{this.state[0][3]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Rarity:</h3></TableCell>
                            <TableCell><h3>{this.state[0][1]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          {this.state[0][2] ? 
                          (<TableRow>
                            <TableCell><h3 className={classes.text}>Cost:</h3></TableCell>
                            <TableCell><h3>{this.state[0][2]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>) : null}
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Expansion:</h3></TableCell>
                            <TableCell><h3>{this.state[0][8]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Expansion card count:</h3></TableCell>
                            <TableCell><h3>{this.state[0][7]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Release date:</h3></TableCell>
                            <TableCell><h3>{new Date(this.state[0][9]).getDate()}/{new Date(this.state[0][9]).getMonth() + 1}/{new Date(this.state[0][9]).getFullYear()}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell><h3 className={classes.text}>Owned:</h3></TableCell>
                            <TableCell><h3>{this.state[0][6]}</h3></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          {this.state[0][5] ? 
                          (<TableRow>
                            <TableCell><h3 className={classes.text}>Lowest price:</h3></TableCell>
                            <TableCell><h3>{this.state[0][5]} $</h3></TableCell>
                            <TableCell><Button variant="contained" color="secondary" onClick={this.handleClick}>Buy</Button></TableCell>
                          </TableRow>) : null}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
    }
}

export default withStyles(styles)(OneCard);
