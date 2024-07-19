import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook for navigation
import banner_img from '../images/relgious-left.png';
import center_img from '../images/full-img.png';
import "./css/whoarewe.css"

const WhoAreWe = () => {
  const history = useHistory(); // Initialize useHistory hook

  const handleContactClick = () => {
    history.push('/contact'); // Redirect to the contact page
  };
  return (
    <div className="religous-main">
      <div className="religous-left">
        <img src={banner_img} alt="About Us Image" className="relgious-img" />
      </div>
      <div className="religous-right">
        <div className="rel-right-upper">
          <h1>WHO WE ARE</h1>
          <h3>We are Offering The Best immersive experience for all Pilgrimages.</h3>
          <p>Experience places in a smarter way with Virtual reality. Explore future at your home with all details and a seamless experience.</p>
        </div>
        <div className="rel-right-bottom">
          <img src={center_img} alt="Image 1" className='full_img'/>
          <p>The promise to use best-in-className technology to reduce the time and friction of visiting different places around the country.</p>
          <div className='contact-us'>
            <button className="waw-button" type="button" onClick={handleContactClick}>Contact With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;
