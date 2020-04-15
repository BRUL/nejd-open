import React, { Component } from 'react';

class MetaImage extends Component {
  render() {
    const { projectName, imageName } = this.props;

    return (
      <meta property="og:image" content={`/responsive-images/${projectName}/${imageName}-medium_@2x.jpg`} />
    );
  }
}

export default MetaImage;
