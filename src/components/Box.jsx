import React from 'react'
import './css/Box_card.css'
import { IoLocationOutline } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";

const Boxedinfo = (props) => {
  return (
    <div className='data'>
      <div className="data-details">
          <div className="data-details-left">
            <div className="img">
              <img src={props.src} alt={props.alt} className='zoom-img'></img>
            </div>

              <button id='top-but'>{props.topbut}</button>
              <p id='amount'><FaRupeeSign />{props.amount}<span>{props.person}</span></p>
              <button id='img-but'>{props.temple}</button>
              <b>{props.templename}</b>
              <p id='location'><IoLocationOutline />{props.locations}</p>
                    
          </div>
      </div>
    </div>
  )
}

export default Boxedinfo