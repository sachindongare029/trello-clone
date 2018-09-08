import React from 'react';
import { Route} from 'react-router-dom'
import Login from './login/index.js';
import Home from './home/index.js';
import Register from './register/index.js';


const Routes = ({ match }) => (
  <div>
    <Route exact path={`/`} component={Home} />
    <Route exact path={`/register`} component={Register} />
    <Route exact path={`/login`} component={Login} />
  </div>
);

export default Routes;