import React, { Component } from 'react';

import ProjectRepository from '../../repositories/project-repository';
const projectRepository = new ProjectRepository();

class ProjectTitle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: props.match ? projectRepository.byId(props.match.params.id) : null
    };
  }

  render() {
    const { project } = this.state;
      return (
        <p className="sidebar">{project.description}</p>
      );
  }
}

export default ProjectTitle;
