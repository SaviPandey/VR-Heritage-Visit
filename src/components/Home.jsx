import React, { useState }  from 'react'
import 'aframe';
import './css/Home.css';
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import Chatbot from './Chatbot';
import Footer from "./Footer";

import Collage from '../assets/collage.png';
import Sphere from '../assets/cut-sphere.png';
import Building from '../assets/builing.png';
import CurlyLines from '../assets/curly-lines.svg';
import Snake from '../assets/curly.png';
import SnakeLeft from '../assets/curly-left.png';
import Collage2 from '../assets/mid-left-img.png';

import ImageComp360 from './ImageComp360';
import ReligiousPlaces from './Religious';
import WhoAreWe from './WhoAreWe';


const Home = () => {
    const handleSearch = (query) => {
        console.log("Searching for:", query);
        // Perform search logic here
    };

    return (
      <>
      <div className="main">
        <Navbar />
        
        <div className='home-container'>
            <div className='tag-line'>
                <img src={Sphere} alt="desg1" className="sphere-img" />
                <img src={CurlyLines} alt="desg2" className="curly-img" />
                <h1>A journey becomes a pilgrimage as we discover, day by day</h1>
                <SearchBar onSearch={handleSearch} /> 
                <img src={Building} alt="desg3" className="building-img" />
            </div>

            <div className='collage'>
                <img src={SnakeLeft} className="snakeL-img" alt='curve-line' />
                <img src={Collage} alt="Pilgrimage-collage" className="collage-img" />
                <img src={Snake} className="snake-img" alt='curve-line' />

            </div> 
        </div>

{/**********************************  Image-On-Landing *****************************************************/}
        <div className='image-container'>
          <ImageComp360 />
          {/* Kuula powered*/}
          {/* <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7c9Dk?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe> */}

          {/* theasys.io */}
          {/* without hotspot */}
        {/* <iframe 
          src="https://www.theasys.io/viewer/ieDK4l5tUUd1FWjVikTu16KnYomja2" 
          allowFullScreen={true} 
          frameBorder="0" 
          scrolling="no" 
          allow="vr;gyroscope;accelerometer" 
          height="450" 
          style={{width: '100%', border: 'none'}} 
        /> */}

        {/* withhotspot */}
      {/* <iframe 
      src="https://www.theasys.io/viewer/ieDK4l5tUUd1FWjVikTu16KnYomja2" 
      allowfullscreen={true} 
      frameborder="0" 
      scrolling="no" 
      allow="vr;gyroscope;accelerometer" 
      height="100%" 
      style={{ width: '100%', border: 'none' }}>

      </iframe> */}
          
        </div>

{/**********************************  Religious-Places *****************************************************/}
        <div className="religious-places">
          < ReligiousPlaces />
        </div>
{/*********************************     Who-are-We  *****************************************************/}
        <div className='mid-container'>
        <WhoAreWe />
        </div>
{/********************************** */}
      <div>
          {/* <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
          <script src="https://mediafiles.botpress.cloud/829bcb46-f42f-499b-b681-83795937937d/webchat/config.js" defer></script> */}
          
      </div>

{/****************************Chatbot************************* */}
          <div className="chatbot">
              <Chatbot />
          </div>

      </div>   
      <Footer />  
      </>
    );
  };



export default Home
