import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <figure className="ProjectThumb">
          <Link to="/project/gloriette"><img src="./images/gloriette0.jpg" alt="" title="" className="loaded" /></Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/gloriette"><img src="./images/gloriette0.jpg" alt="" title="" className="loaded" /></Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/gloriette"><img src="./images/gloriette0.jpg" alt="" title="" className="loaded" /></Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/gloriette"><img src="./images/gloriette0.jpg" alt="" title="" className="loaded" /></Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
      </div>
    );
  }
}

export default Projects;
