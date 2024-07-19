import React from 'react'
import Navbar from '../components/Navbar';
import Pilup from './pilup';
import PilBotLeft from './pilBotLeft';
import PilBotRight from './PilBotRight';
import Footer from '../components/Footer';
import './Pilgrimage1.css';
import Protected from '../components/protected/protected';



const Rammandir = () => {
  return (
    <div>
    <div className="Pil-div">
    <Navbar />
    
    <Pilup name="RamMandir" location="Uttar Pradesh"
    // src="https://www.theasys.io/viewer/6Dp2mClgLSfGV1DJD2Pmeb5qzoI7X9"
    src="https://www.theasys.io/viewer/O3MOL9vh7VQARzmuCXRH9GTBmhz6k0"
    />
    <PilBotLeft r1c2="2000" r1c4="FREE" r2c2="TEMPLE" r2c4="YES" r3c2="10am to 8pm" r3c4="10.30am to 7pm" r4c2="30 MINUTES" r4c4="30Acre" r5c2="5462 sq/f" r5c4="1947" 
    about="Ram Mandir is a Hindu temple dedicated to Lord Ram located in Ayodhya, Uttar Pradesh, India. It holds immense significance in Hinduism as it is believed to be the birthplace of Lord Ram. The temple has a long history, with the original structure believed to have been constructed in ancient times. However, the current temple complex is the result of recent construction efforts, including the laying of the foundation stone in 2020."
    facts="The temple is designed in the Nagara style of architecture, with intricate carvings and sculptures depicting various scenes from the epic Ramayana. It is a symbol of faith and devotion for millions of Hindus worldwide. The construction of the temple has been a subject of controversy and debate, but its completion stands as a testament to the enduring legacy of Lord Ram and the cultural heritage of India."    
    Info="After years of legal disputes and controversies, the construction of the Ram Mandir began in 2020 following a groundbreaking ceremony attended by various dignitaries. The temple complex is expected to be a sprawling structure, reflecting the grandeur of ancient Indian architecture. The completion of the Ram Mandir is seen as a significant moment in Indian history, symbolizing the fulfillment of a longstanding aspiration of millions of Hindus."
    />
    <Protected><PilBotRight /></Protected>
    </div>
    <Footer />
    </div>
  )
}


export default Rammandir;