import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PageMenu extends Component {
  render() {
    return (
      <ul className="menu sidebar">
        <li><NavLink to="/projects">Projecten</NavLink></li>
        <li><NavLink to="/info">Informatie</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    );
  }
}

export default PageMenu;
