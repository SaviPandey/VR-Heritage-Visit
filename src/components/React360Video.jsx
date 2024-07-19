import React from 'react';
import React360Video from 'react-360-video';

const My360VideoComponent = () => {
  return (
    <div>
      <React360Video
        src={require('../assets/Ganpati.mp4')}
        width="100%"
        height="100vh"
        autoplay
        loop
        muted
      />
    </div>
  );
};

export default My360VideoComponent;
