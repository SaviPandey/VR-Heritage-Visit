import React from 'react'
import './css/contact.css';
import ImageWithStyles from './ImageWithStyles';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import img from '../assets/contactus.jpg'
import Navbar from './Navbar'
import Footer from './Footer';

const Contact = () => {
  return (
    <div className='contact-main'>
    <Navbar />
    <div className="contact-container">
      <div className="contact-box contact-box-1">
        <div className='contact-box-2'>
          <ImageWithStyles className="contact-box-1 img"  src={img} width={750} height={470} /> 
          <iframe className="contact-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.3294899989323!2d72.96724449999999!3d19.2680325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bba2e15f6c7b%3A0x20e1357d640bef7e!2sA.%20P.%20Shah%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1709658456312!5m2!1sen!2sin" width="750" height="470"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>    
    
      <div className="contact-box contact-box-2">
        <div className='contact-information'>
          <h1><b>OFFICE INFORMATION</b></h1>
          <p className='contact-information-p'>VRTOUR VIRTUAL PILGRIMAGE</p>
          <p className='contact-information-p'>456 VIGZAG ROAD, SECTOR 10 CYBER CITY,</p>
          <p className='contact-information-p'>DELHI - 110012</p>
          <p className='contact-information-p'>INDIA</p>    
          <div className='contact-emerge-call'>
            
            <p className='emerge'><b>Emergency Call:</b></p>
            <p className='contact-para'><IoMdCall id='call-icon'/><b>+91 - 9876543210</b></p>
          </div>
          
          <div className='contact-social-share'>
            <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            
            <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
        
            <a href="[https://www.linkedin.com/your-linkedin-profile]" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/ojus_apsit?igsh=ZHoxcXRkamIkdXhz" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div> 
        
        </div>

      
     <div className='contact-info-c'>
        <h1 className='contact-info-c-h1'>Quicks Contact</h1>
        <p className='contact-info-c-para'> Contact for a quick resolution of your doubt</p>
        <div className='contact-c-input-container'>
      <input type='text' className='contact-c-input-box' placeholder='Name*' required />
      <input type='tel' className='contact-c-input-box' placeholder='Phone*' required />
      <textarea className='contact-c-message-box' placeholder='Message'></textarea>
      <button className='contact-c-submit-button'>Submit</button>
    </div>
      </div>
      </div>
  </div>
  <Footer />
  </div>
  );
  
};
export default Contact;