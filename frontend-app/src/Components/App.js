import React, { PureComponent } from 'react'
import { Route, HashRouter } from 'react-router-dom';
import { Header, Footer, Cards, Card, Collection, Decks } from './Layouts'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary:  {
        main: '#212121',
    },
    secondary:  {
        main: '#f44336',
    },
  },
});

const axios = require('axios');

export default class extends PureComponent {
    getData() {
        axios.get('/random')
            .then((response) => {
                this.setState(response.data);
            });
    }

    componentDidMount(){
        this.getData();
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
                <HashRouter>
                    <Header />
                    <Route exact path="/" render={() => <Cards cards={this.state}/>}/>
                    <Route path="/decks" component={Decks}/>
                    <Route path="/collection" component={Collection}/>
                    <Route path="/card/:card_exp/:card_no" component={Card}/>
                </HashRouter>
                <Footer />
            </ThemeProvider>
        );
    }
}
