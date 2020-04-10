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
import FolieADeux from './containers/Project/FolieADeux';
import Kolom from './containers/Project/Kolom';
import Still from './containers/Project/Still';
import Untitled from './containers/Project/Untitled';
import Info from './containers/Info/Info';
import Contact from './containers/Contact/Contact';

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
              <Route exact path='/project/folie-a-deux' component={FolieADeux} />
              <Route exact path='/project/kolom' component={Kolom} />
              <Route exact path='/project/still' component={Still} />
              <Route exact path='/project/untitled' component={Untitled} />
              <Route exact path='/info' component={Info} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
        )}
      />
    </Router>
  </div>,
  document.getElementById('root')
);
