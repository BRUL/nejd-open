import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import Analytics from 'react-router-ga';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

import Header from './components/Header/Header';
const Projects = lazy(() => import('./containers/Projects/Projects'));
const Project = lazy(() => import('./containers/Project/Project'));
const Info = lazy(() => import('./containers/Info/Info'));
const Contact = lazy(() => import('./containers/Contact/Contact'));


ReactDOM.render(
    <div className="App">
    <Router>
      <Analytics id="UA-101955661-1" debug>
      <Header />
      <Suspense fallback={<div className="Loading">Laden...</div>}>
      <Route
        render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' component={Projects} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/project/:id' component={Project} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
        )}
      />
    </Suspense>
  </Analytics>
    </Router>
    </div>,
  document.getElementById('root')
);
registerServiceWorker();
