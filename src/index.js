import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Analytics from 'react-router-ga';
import { render } from 'react-snapshot';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

import Header from './components/Header/Header';
import Projects from './containers/Projects/Projects';
import Project from './containers/Project/Project';
import Info from './containers/Info/Info';
import Contact from './containers/Contact/Contact';


render(
    <div className="App">
    <Router>
      <Analytics id="UA-101955661-1" debug>

        <Header />

        <Route render={({ location }) => (
          <Switch>
            <Route exact path='/' component={Projects} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/project/:id' component={Project} />
            <Route exact path='/info' component={Info} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        )} />

      </Analytics>
    </Router>
    </div>,
  document.getElementById('root')
);
registerServiceWorker();
