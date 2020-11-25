/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp/index';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
