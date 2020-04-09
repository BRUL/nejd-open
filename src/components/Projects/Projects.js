import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Projects.scss';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <div className="ProjectThumb">
          <Link to="/project/gloriette"><img src="./images/gloriette0.jpg" alt="" title="" /></Link>
        </div>
        <div className="ProjectThumb">
          <Link to="/"><img src="./images/gloriette0.jpg" alt="" title="" /></Link>
        </div>
        <div className="ProjectThumb">
          <Link to="/"><img src="./images/gloriette0.jpg" alt="" title="" /></Link>
        </div>
        <div className="ProjectThumb">
          <Link to="/"><img src="./images/gloriette0.jpg" alt="" title="" /></Link>
        </div>
      </div>
    );
  }
}

export default Projects;
