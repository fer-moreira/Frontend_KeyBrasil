import React from 'react';

import {
  Route, 
  BrowserRouter as Router, 
  Switch
} from 'react-router-dom';

import Homepage from './components/Homepage';
import Product from './components/Product';


function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/product/:slug" exact component={Product}/>
      </Switch>
    </Router>
  );
}

export default Routes;