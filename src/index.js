import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import store  from './store';

import App  from './App';


render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router >
      <Route path="/" component={App}>
     </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
