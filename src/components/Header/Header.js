import React, { Component } from 'react';
import {
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import ProjectTitle from '../ProjectTitle/ProjectTitle';
import PageMenu from '../PageMenu/PageMenu';

import { ReactComponent as Logo } from './NEJD-logo.svg';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" className="logo"><Logo alt="NEJD" title="Niels Evenepoel Jonathan Dequeker" /></NavLink>

        <Switch>
          <Route path='/project/:id' component={ProjectTitle} />
          <Route path='/' component={PageMenu} />
        </Switch>

      </header>
    );
  }
}

export default Header;
