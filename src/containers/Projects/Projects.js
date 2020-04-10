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
            <ResponsiveImage projectName="gloriette" imageName="gloriette0" alt="thumbnail" title="" />
          </Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/folie-a-deux">
            <ResponsiveImage projectName="folieadeux" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Folie à Deux</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/kolom">
            <ResponsiveImage projectName="kolom" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Kolom</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/still">
            <ResponsiveImage projectName="still" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Still</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/untitled">
            <ResponsiveImage projectName="untitled" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Untitled</figcaption>
        </figure>
      </div>
    );
  }
}

export default Projects;
