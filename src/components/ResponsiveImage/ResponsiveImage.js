import React, { Component } from 'react';
import classnames from 'classnames';
import base64Thumbs from '../../base64-images/result';
import { LazyImage } from 'react-lazy-images';

import './ResponsiveImage.scss';

class ResponsiveImage extends Component {
  constructor(props) {
    super(props);

    this.onImageLoaded = this.onImageLoaded.bind(this);

    this.state = {
      loaded: false
    };
  }

  onImageLoaded() {
    this.setState({
      loaded: true
    });
  }

  render () {
    const { projectName, imageName, alt, title, sizes, className } = this.props;
    const { loaded } = this.state;

    const classNames = classnames('ResponsiveImage', { 'loaded': loaded }, className);

    return (
      <LazyImage
        className={classNames}
        src={`${base64Thumbs[`${projectName}/${imageName}`]}`}
        srcSet={`
        /responsive-images/${projectName}/${imageName}-large_@2x.jpg 3000w,
        /responsive-images/${projectName}/${imageName}-large_@1x.jpg 1500w,
        /responsive-images/${projectName}/${imageName}-medium_@2x.jpg 1440w,
        /responsive-images/${projectName}/${imageName}-medium_@1x.jpg 720w,
        /responsive-images/${projectName}/${imageName}-small_@2x.jpg 600w,
        /responsive-images/${projectName}/${imageName}-small_@1x.jpg 300w,
        /responsive-images/${projectName}/${imageName}-tiny_@2x.jpg 290w,
        /responsive-images/${projectName}/${imageName}-tiny_@1x.jpg 145w
        `}
        sizes={sizes}
        alt={alt} title={title}
        onLoad={this.onImageLoaded}
        placeholder={({ imageProps, ref }) => (
          <img ref={ref} src={`${base64Thumbs[`${projectName}/${imageName}`]}`} alt={imageProps.alt} className={classNames} />
        )}
        actual={({ imageProps }) => <img {...imageProps} alt={alt} title={title} />}
      />
    );
  }
}

export default ResponsiveImage;
