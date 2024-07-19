// Hotspots.jsx
import React from 'react';

const Hotspots = ({ hotspots }) => {
  const handleHotspotClick = (onClick) => {
    onClick();
  };

  return (
    <a-entity>
      {hotspots.map((spot, index) => (
        <a-entity key={index}>
          {/* Hotspot sphere */}
          <a-sphere geometry={`radius: ${spot.radius}`} material={`color: ${spot.color}`}
            position={`${spot.position.x} ${spot.position.y} ${spot.position.z}`} />
          {/* Clickable plane attached to the hotspot */}
          <a-plane width="1" height="1" position={`${spot.position.x} ${spot.position.y + spot.radius} ${spot.position.z}`}
            onClick={() => handleHotspotClick(spot.onClick)} cursor-listener />
        </a-entity>
      ))}
    </a-entity>
  );
};

export default Hotspots;
