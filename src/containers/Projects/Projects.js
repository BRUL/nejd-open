import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <figure className="ProjectThumb">
          <Link to="/project/gloriette">
            <ResponsiveImage projectName="gloriette" imageName="gloriette0" alt="" title="" />
          </Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
      </div>
    );
  }
}

export default Projects;
