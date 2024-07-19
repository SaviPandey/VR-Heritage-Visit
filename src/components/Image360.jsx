import React from 'react';
import './css/Image360.css';
import hero from '../assets/hero.jpeg'

const Image360 = () => {
  return (
    <a-scene embedded style={{ width: '100%', height: '575px !important' }}>
      <a-sky src={hero} rotation="0 -130 0" animation="property: rotation; to: 0 230 0; dur: 25000; loop: true;" />
      <a-camera position="0 0 0" zoom="1" />
    </a-scene>
  );
};

export default Image360;