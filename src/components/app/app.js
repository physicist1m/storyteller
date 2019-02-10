import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

import { HomePage } from '../pages';
 
const App = () => {
    return(
        <Switch>
            <Route 
              path="/"
              component={HomePage}
              exact />
            {/* <Route
              path="/nothome"
              component={nothome} /> */}
        </Switch>
    );
};

export default App;