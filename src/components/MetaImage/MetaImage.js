import React, { Component } from 'react';

class MetaImage extends Component {
  render() {
    const { projectName } = this.props;

    return (
      <meta property="og:image" content={`/responsive-images/${projectName}/thumbnail.jpg`} />
    );
  }
}

export default MetaImage;
