import React from 'react'
import Navbar from '../components/Navbar';
import Pilup from './pilup';
import PilBotLeft from './pilBotLeft';
import PilBotRight from './PilBotRight';
import Footer from '../components/Footer';
import './Pilgrimage1.css';



const Pilgrimage2 = () => {
  return (
    <div>
    <div className="Pil-div">
    <Navbar />
    <Pilup name="Lotus Temple" location="New Delhi, India"/>
    <PilBotLeft r1c2="2001" r1c4="100Rs" r2c2="TEMPLE" r2c4="YES" r3c2="7am to 8pm" r3c4="9.30am to 7pm" r4c2="45 MINUTES" r4c4="50Acre" r5c2="6562 sq/f" r5c4="2003" 
    about="The Lotus Temple, located in New Delhi, India, is a Baháʼí House of Worship that was dedicated in December 1986. Notable for its lotus-like shape, it has become a prominent attraction in the city. Like all Bahá’í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification. The building is composed of 27 free-standing marble-clad (petals)arranged in clusters of three to form nine sides,with nine doors opening onto a central hall with a height of slightly over 34 metres and a capacity of 1,300 people.The Lotus Temple has won numerous architectural awards and has been featured in many newspaper and magazine articles."
    facts="The architect of the Lotus Temple was an Iranian, Fariborz Sahba who now lives in La Jolla, California,after spending some years in Canada.He was approached in 1976 to design the Lotus Temple and later oversaw its construction. The structural design was undertaken by the British firm Flint and Neill over the course of 18 months,and the construction was done by ECC Construction Group of Larsen & Toubro Limited at a cost of $10.56 million.The major part of the funds needed to buy this land was donated by Ardishír Rustampúr of Hyderabad, Sindh (Pakistan), whose will stipulated that his entire life savings would go towards the building of the temple."
        />
    <PilBotRight />
    </div>
    <Footer />
    </div>
  )
}


export default Pilgrimage2;