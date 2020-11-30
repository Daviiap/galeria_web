/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
