import React, { Component } from 'react';
import './Project.scss';

import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';

import ProjectRepository from '../../repositories/project-repository';
const projectRepository = new ProjectRepository();

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: props.match ? projectRepository.byId(props.match.params.id) : null
    };
  }

  render() {
    const { project } = this.state;

    return project ? (
      <div className="Project">

        <ProjectCarousel project={this.state.project} />

      </div>
    ) : null;
  }
}

export default Project;
