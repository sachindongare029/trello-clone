import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './home/index.js';
import Login from './login/index.js';
import Register from './register/index.js';
import Dashboard from './dashboard/index.js';

const Routes = ({ match }) => (
  <React.Fragment>
    <Header />
    <main className="main">
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/register'} component={Register} />
      <Route exact path={'/login'} component={Login} />
      <Route path={'/u/dashboard'} component={Dashboard} />
    </main>
    <Footer />
  </React.Fragment>
);

export default Routes;
