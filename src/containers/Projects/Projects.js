import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import MetaTags from 'react-meta-tags';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">

        <MetaTags>
          <title>NEJD Interieurarchitectuur</title>
          <meta name="title" content="NEJD interieurarchitectuur" />
          <meta name="description" content="NEJD is het ontwerpatelier met Niels Evenepoel en Jonathan Dequeker. Het atelier heeft ervaring met het inrichten van leefruimtes, paviljoenen, maatmeubelen, en commerciële opdrachten met projecten in de renovatie- en nieuwbouw sector." />
        </MetaTags>

        <figure className="ProjectThumb">
          <Link to="/project/untitled">
            <ResponsiveImage projectName="untitled" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Untitled</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/kolom">
            <ResponsiveImage projectName="kolom" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Kolom</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/folie-a-deux">
            <ResponsiveImage projectName="folieadeux" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Folie à Deux</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/still">
            <ResponsiveImage projectName="still" imageName="thumbnail" alt="thumbnail" title="" />
          </Link>
          <figcaption>Still</figcaption>
        </figure>
        <figure className="ProjectThumb">
          <Link to="/project/gloriette">
            <ResponsiveImage projectName="gloriette" imageName="gloriette0" alt="thumbnail" title="" />
          </Link>
          <figcaption>Gloriëtte</figcaption>
        </figure>

      </div>
    );
  }
}

export default Projects;
