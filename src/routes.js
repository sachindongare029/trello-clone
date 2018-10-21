import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home/index.js';
import Login from './sign-in/index.js';
import Register from './sign-up/index.js';

const Routes = ({ match }) => (
  <main className="main">
    <Route exact path={'/'} component={Home} />
    <Route exact path={'/register'} component={Register} />
    <Route exact path={'/login'} component={Login} />
  </main>
);

export default Routes;
