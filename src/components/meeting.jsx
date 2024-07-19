import React, { useState,useContext,useEffect } from 'react';
import axios from 'axios'; // for making HTTP requests
import './css/meeting.css'
import { useHistory } from 'react-router-dom';
import { UserContext } from '../App';



function ScheduleMeet() {

  const {state , dispatch} = useContext(UserContext);

  const navigate = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [meetingId, setMeetingId] = useState('');
  const [guide, setGuide] = useState(''); 
  const [registeredDates, setRegisteredDates] = useState([]);
  // const [registeredGuide, setRegisteredGuide] = useState([])

  // useEffect(() => {
  //   fetchRegisteredDates();
  //   fetchRegisteredGuide();
  // }, []);
  useEffect(() => {
    const fetchRegisteredDates =async () => {
      const response = await axios.get('http://localhost:4000/get-registered-dates');
      setRegisteredDates(response.data);
    };

    fetchRegisteredDates();
  }, []);


  // const fetchRegisteredDates = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/get-registered-dates');
  //     setRegisteredDates(response.data);
  //   } catch (error) {
  //     console.error('Error fetching registered dates:', error);
  //   }
  // };
  // const fetchRegisteredGuide = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/get-registered-guide');
  //     setRegisteredGuide(response.data);
  //   } catch (error) {
  //     console.error('Error fetching registered dates:', error);
  //   }
  // };


  // const isRegisteredDate = (date,guide) => {
  //   // Convert meetingDate to a Date object
  //   const selectedDate = new Date(date);
  
  //   // Iterate through registeredDates array
  //   for (let i = 0; i < registeredDates.length; i++) 
  //     // for (let i = 0; i < registeredGuide.length; i++)
  //   {
  //     // Convert each registered date to a Date object
  //     const registeredDate = new Date(registeredDates[i]);
  //     // const registeredGuide = new String(registeredGuide[i]);
  
  //     // Compare selectedDate with registeredDate
  //     // Note: This comparison only checks for the same date, not time
  //     // && selectedGuide.toDateString() === registeredGuide.toDateString()
  //     if (selectedDate.toDateString() === registeredDate.toDateString()) {
  //       return true; // Date is registered
  //     }
  //   }
  //   return false; // Date is not registered
  // };

  const checkGuideAvailability = async () => {
    try {
      const response = await axios.post('http://localhost:4000/check-guide-availability', { date: meetingDate, guide });
      if (response.data.length > 0) {
        alert('Guide is not available on this date');
      }
    } catch (error) {
      console.error('Error checking guide availability:', error);
      alert('An error occurred. Please try again.');
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert meetingDate string to Date object
  const meetingDateObj = new Date(meetingDate);
   // Check if the selected date and guide are already taken
  // Check if the selected date and guide are already taken
  const isGuideAvailable = registeredDates.every(meeting => {
    const meetingDate = new Date(meeting.meetingDate);
    return meetingDate.toISOString() !== meetingDateObj.toISOString() || meeting.guide !== guide;
  });
  
  if (!isGuideAvailable) {
    alert('Guide is not available on this date');
    return;
  }

    try {
      // Send form data to backend
      await axios.post('http://localhost:4000/submit-meeting-form', { name, email, phoneNumber, meetingDate, meetingTime , meetingId , guide});

      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMeetingDate('');
      setMeetingTime('');
      setMeetingId('');
      setGuide('');
      
      dispatch({ type: "SCHEDULE_MEETING" });
      navigate.push('/pilgrimage')
      alert('Meeting Scheduled successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // const handleDateClick = () => {
  //   if (isRegisteredDate(meetingDate)) {
  //     alert('This date is already registered. Please choose another date.');
  //   }
  // };

  return (
    <div className='meet-div'>
      <h1>SCHEDULE MEETING</h1>
    <form onSubmit={handleSubmit} className='meet-form'>
      <label className='labelz'>
        <h1>Name:</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </label>
      <label className='labelz'>
        <h1>Email:</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </label>
      <label className='labelz'>
        <h1>Phone Number*:</h1>
        <input  type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
      </label>
      <label className='labelz'>
        <h1>Meeting Date:</h1>
        <input type='date' value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)} required/>
          {/* <input
            type='date'
            value={meetingDate}
            onChange={(e) => setMeetingDate(e.target.value) }
            onSelect={handleDateClick}
            required
            className={isRegisteredDate(meetingDate) ? 'registered-date' : ''}
          /> */}
      </label>
      <label className='labelz'>
        <h1>Meeting Time:</h1> 
        <input type='time' value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)} required/>
      </label>
      <label className='labelz'>
          <h1>Meeting ID:  *(Schedule a meeting and then fill this field with either link or ID of the meet)</h1>
          <input type="text" value={meetingId} onChange={(e) => setMeetingId(e.target.value)} required/>
        </label>
        <label className='labelz'>
          <h1>Select Guide:</h1>
          <select value={guide} onChange={(e) => setGuide(e.target.value)} required>
            <option value="">Select a guide</option>
            <option value="Savinay">Savinay</option>
            <option value="Gautam">Gautam</option>
            <option value="Pratik">Pratik</option>
          </select>
        </label>
      <br />
      <br />
      <button type="submit" onClick={handleSubmit} className='meet-btn'>Schedule Meeting</button>
    </form>
    </div>
  );
}

export default ScheduleMeet;