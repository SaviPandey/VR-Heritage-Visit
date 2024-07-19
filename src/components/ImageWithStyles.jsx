import React from 'react';

const ImageWithStyles = ({ src, width, height }) => {
  const imageStyles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return <img src={src} style={imageStyles} alt="" />; 

};

export default ImageWithStyles;