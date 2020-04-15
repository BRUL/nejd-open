import React, { Suspense, lazy } from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import { render } from 'react-snapshot';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';

import Header from './components/Header/Header';
const Projects = lazy(() => import('./containers/Projects/Projects'));
const Gloriette = lazy(() => import('./containers/Project/Gloriette'));
const FolieADeux = lazy(() => import('./containers/Project/FolieADeux'));
const Kolom = lazy(() => import('./containers/Project/Kolom'));
const Still = lazy(() => import('./containers/Project/Still'));
const Untitled = lazy(() => import('./containers/Project/Untitled'));
const Info = lazy(() => import('./containers/Info/Info'));
const Contact = lazy(() => import('./containers/Contact/Contact'));


render(
    <div className="App">
    <Router>
      <Header />
      <Suspense fallback={<div className="Loading">Laden...</div>}>
      <Route
        render={({ location }) => (
            <Switch location={location}>
              <Route exact path='/' component={Projects} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/project/gloriette' component={Gloriette} />
              <Route exact path='/project/folie-a-deux' component={FolieADeux} />
              <Route exact path='/project/kolom' component={Kolom} />
              <Route exact path='/project/still' component={Still} />
              <Route exact path='/project/untitled' component={Untitled} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
        )}
      />
    </Suspense>
    </Router>
    </div>,
  document.getElementById('root')
);
registerServiceWorker();
