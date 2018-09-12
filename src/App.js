import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer.js';
import { HashRouter } from 'react-router-dom'
import Routes from './routes.js'
import {Grid} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <HashRouter>
          <div className="App">
            <Grid>
              <Header />
              <Routes />
              <Footer />
            </Grid>
          </div>
        </HashRouter>

    );
  }
}

export default App;
