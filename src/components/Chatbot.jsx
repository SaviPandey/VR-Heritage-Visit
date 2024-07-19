import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Initialize Botpress webchat
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/829bcb46-f42f-499b-b681-83795937937d/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);

    return () => {
      // Clean up on component unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div id="webchat"></div>
  );
};

export default Chatbot;
{/* <div class="bpw-header-name">VRBrahman</div>
<div class="bpw-header-subtitle">This chatbot was built surprisingly fast with Botpress</div> */}
