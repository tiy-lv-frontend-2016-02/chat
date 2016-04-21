import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// layouts
import App from 'layouts/app';

// components
import RootContainer from 'ui/root-container';
import NotFound from 'ui/notfound';


export default (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={RootContainer} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
)
