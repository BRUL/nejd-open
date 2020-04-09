import React, { Component } from 'react';
import { ReactComponent as Logo } from './NEJD-logo.svg';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/" className="logo"><Logo alt="NEJD" title="Niels Evenepoel Jonathan Dequeker" /></NavLink>
        <ul className="menu">
          <li><NavLink to="/projects">Projecten</NavLink></li>
          <li><NavLink to="/info">Informatie</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default Header;
