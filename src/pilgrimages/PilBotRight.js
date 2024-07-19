import React, { useContext, useState } from 'react'
import './PilBotRight.css'
import img from '../assets/logo_tour.png'
import { UserContext } from '../App'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios';

const Pilgrim_form = () => {
  const {state,dispatch} = useContext(UserContext)
  const [fullname,setFullName] = useState('');
  const [phonenumber,setPhoneNumber] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      await axios.post('http://localhost:4000/submit-review',{fullname,phonenumber,email,message});
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setMessage('');

      navigate.push('./pilgrimage')
      alert('Review message submitted successfuly')
    }catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  }

  const navigate = useHistory();
  const handleScheduleMeeting = () => {
    navigate.push("/submit-meeting-form")
  }
  return (
    <>
    <div class="right-bottom-div">
          <h3 className='widget-subtitle'>Contact Your Guide</h3>
          
            <img src={img} alt='' />
          

          <div class="contact-info">
              <h4 className='item-title'>VRTOUR</h4><br />
              <div className="itm-phn">
                +91 1234567890<br />
              </div>
              <div className="itm-email">
                info@vrtour.com<br />
              </div>
              {/* <div className="itm-rating">
                  <ul>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li><i class="fas fa-star"></i></li>
                      <li className="rating-count">(Reviews 15)</li>
                    </ul>
              </div> */}
              
              <div className="meet-button">
                <button class="schedule-button" onClick={handleScheduleMeeting}><i class="fas fa-comment"></i> Schedule Meeting</button> <br /> <br />
              </div>

              <div className="form-container">
                <form>
                  <input type="text" value={fullname} name="fullname" placeholder="Your Full Name" onChange={(e) => setFullName(e.target.value)} required /> <br /> <br />
                  <input type="tel" value={phonenumber} phone="phonenumber" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} required/> <br /> <br />
                  <input type="text"value={email} name="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required /> <br /> <br />
                  <textarea value={message} className="message-input" name="message" placeholder="Your Message" onChange={(e) => setMessage(e.target.value)}></textarea> <br /> <br />
                  <button type="submit" className="send-msg" onClick={handleSubmit}>Send Message<i class="fas fa-search"></i></button> 
                </form>
              </div>
        </div>
    </div>
    </>
  )
}
export default Pilgrim_form;