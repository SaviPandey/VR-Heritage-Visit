import React from 'react'
import './pilup.css'
import { IoLocationOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";

const Pilup = (props) => {
  return (
    <div className='main-pil'>
        <h1 style={{fontSize : '40px' , marginLeft : '2%'}}>{props.name}</h1>
        <h3 style={{fontSize : '20px' , marginLeft : '2%'}}><IoLocationOutline />{props.location}</h3>
        <center><div className='orangebox'><h1 className='in-ob'><CiImageOn className='image-icon'/>360 image</h1></div></center>
        <center><hr className='upper-line'></hr></center>
        <center><div className='Box360'>
          {/* <iframe width="100%" height="640" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7cHPs?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe> */}
          <iframe src={props.src} allowfullscreen="true" frameborder="0" scrolling="no" allow="vr;gyroscope;accelerometer" height="640" width="100%"></iframe>
          </div></center>
    </div>
  )
}

export default Pilup;