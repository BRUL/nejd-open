import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { render } from 'react-snapshot';

import Header from './components/Header/Header';
import Projects from './containers/Projects/Projects';
import Gloriette from './containers/Project/Gloriette';
import Info from './containers/Info/Info';

import './index.scss';

render(
  <div className="App">
    <Router>
      <Header />
      <Route
        render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' component={Projects} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/project/gloriette' component={Gloriette} />
              <Route exact path='/info' component={Info} />
            </Switch>
        )}
      />
    </Router>
  </div>,
  document.getElementById('root')
);
