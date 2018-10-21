import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import './App.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};
export default App;
