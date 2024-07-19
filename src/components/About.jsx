import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./css/About.css";
import img from '../images/img1.png'
import img2 from '../images/img2.png'
import ram_img from '../images/ram.jpg'

const About = () => {
    return (
      <>
        <Navbar />
        <div className="about-main">

            <div className="about-left">
              <img src={ram_img} alt="About Us Image" class="ram-img" />
            </div>

            <div className="about-right">

              <div className="right-upper">
                <h1 >ABOUT US</h1>
                <h3 >We're on a Mission to Change View of Monuments/Temples.</h3>
                <p >VRTOUR is a unique digital platform which offers 360 degree view solution to our visitors for all their travel issues. The portal is completely devoted to meet every requirement of the visitor.</p>
              </div>

              <div className="right-bottom">

                <div className="bottm-left">
                      <img src={img} alt="Image 1" className='img1'/>
                      <h3>Temples</h3>
                      <p>We provide credible information about pilgrimages</p>
                </div>
    
                <div className="bottom-right">
                      <img src={img2} alt="Image 2" className='img2' />
                      <h3>Make a Donation</h3>
                      <p>A robust payment mechanism with secured system</p>
                </div>
              </div>
                
            </div>

        </div>
        <Footer />
      </>
    );
  };

export default About