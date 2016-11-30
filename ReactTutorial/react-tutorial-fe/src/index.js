import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import BookPanel from './components/BookPanel';

const About = () => (
  <div>
    <h2>About</h2>
    <Link to="/">Home</Link>
  </div>
);

const NoMatch = () => (
  <div>
    <h2>No match</h2>
    <Link to="/">Home</Link>
  </div>
);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={BookPanel} />
        <Route path="/about" component={About} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('content')
);

