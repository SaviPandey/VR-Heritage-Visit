import React from 'react'
import Boxedinfo from './Box'
import './css/Religious.css';
import img from '../images/akshardham.jpg';
import img2 from '../images/lotus-temple.jpg';
import img3 from '../images/tirupati-balaji-temple.jpg';
import img4 from '../images/golden-temple.jpg'
import img5 from '../images/ram-mandir.jpg'
import img6 from '../images/siddhivinayak.jpg'

const Religious = () => {
  const handleViewAllClick = () => {
    // Define the behavior you want to happen when the button is clicked
    console.log('View all locations clicked');
    // You can add more logic here if needed
  };
  return (
    <>
    <div className='religious-upper'>
        <center><h2>MOST VIEWED</h2></center>
        <center><h1>RELIGIOUS PLACES</h1></center>
        <Boxedinfo src={img} alt="" topbut="Visit Now" amount="250/" person="person" temple="Temple" templename="AksharDham Temple" locations="New Delhi,India"/>
        <Boxedinfo src={img2} alt="" topbut="Visit Now" amount="Free" person="" temple="Temple" templename="Lotus Temple" locations="New Delhi,India"/>
        <Boxedinfo src={img5} alt="" topbut="Visit Now" amount="Free" person="" temple="Mandir" templename="Ram Mandir" locations="Uttar Pradesh,India"/>
        <Boxedinfo src={img4} alt="" topbut="Visit Now" amount="Free" person="" temple="Gurudwara" templename="Golden Temple" locations="Amritsar,India"/>
        <Boxedinfo src={img3} alt="" topbut="Visit Now" amount="Free" person="" temple="Church" templename="Tirupati  Balaji Temple" locations="Andhra Pradesh,India"/>
        <Boxedinfo src={img6} alt="" topbut="Visit Now" amount="100/" person="person" temple="temple" templename="Shree Shiddhivinayak Temple" locations="Mumbai,India"/>
        {/* <button id='viewall'>View All Locations</button> */}
    </div>
    <div className="viewAll">
      <button className="viewAll-button" type="button" onClick={handleViewAllClick}>View All Locations</button>
    </div>
    </>
    
  )
}

export default Religious;