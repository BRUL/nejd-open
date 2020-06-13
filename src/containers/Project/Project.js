import React, { Component } from 'react';
import './Project.scss';

import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';
import MetaTags from 'react-meta-tags';
import MetaImage from '../../components/MetaImage/MetaImage';

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
        <MetaTags>
          <title>{this.state.project.description}</title>
          <meta name="title" content={this.state.project.description} />
          <MetaImage projectName={this.state.project.name} />
          <meta property="og:image:type" content="image/jpg" />
          <meta property="og:image:width" content="1440" />
        </MetaTags>
        
        <ProjectCarousel project={this.state.project} />
      </div>
    ) : null;
  }
}

export default Project;
