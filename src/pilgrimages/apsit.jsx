import React from 'react'
import Navbar from '../components/Navbar';
import Pilup from './pilup';
import PilBotLeft from './pilBotLeft';
import PilBotRight from './PilBotRight';
import Footer from '../components/Footer';
import './Pilgrimage1.css';
import Protected from '../components/protected/protected';



const Apsit = () => {
  return (
    <div>
    <div className="Pil-div">
    <Navbar />
    
    <Pilup name="Apsit" location="Thane,Maharashtra"
    src="https://www.theasys.io/viewer/6Dp2mClgLSfGV1DJD2Pmeb5qzoI7X9"
    // src="https://www.theasys.io/viewer/O3MOL9vh7VQARzmuCXRH9GTBmhz6k0"
    />
    <PilBotLeft r1c2="2001" r1c4="FREE" r2c2="College" r2c4="YES" r3c2="8am to 6pm" r3c4="N/A" r4c2="30 MINUTES" r4c4="10Acre" r5c2="5400 sq/f" r5c4="2016" 
    about="A. P. Shah Institute of Technology is a private engineering college located in Kasarvadavali, in Thane, India. It was established in 2014 and is managed by the Parshvanath Charitable Trust.

    It is a Jain religious minority College (i.e., 51% of all seats are reserved for students from the Jain religious minority community) and is affiliated to the University of Mumbai (a public university, funded by the state government of Maharashtra)."
    facts="It offers a Bachelor of Engineering (B.E.) degree in Civil engineering, Computer engineering, Electronics, and telecommunication engineering, Information Technology, and Mechanical engineering. All of these courses last for 4 years.Admissions to the seats not reserved for the Jain religious minority, for first-year undergraduate engineering programs, are carried out via the Centralized Admissions Process (CAP) of the State Government's Directorate of Technical Education (DTE).Entrance examinations are used: 85% of CAP seats are filled using the Composite Score followed by the Joint Entrance Examination score and HSC score (Maharashtra state students only). "    
    Info="The five-story campus on Ghodbunder Road in Kasarvadavali Naka is owned by the Parshvanath Charitable Trust. Wi-Fi is available on campus and there is wide use of closed-circuit TV cameras for security.

    In addition to small shops and restaurants in the area, there is the Big Bazar Mall, McDonald's fast-food restaurant, and commercial buildings like that of G-Corp. The Sanjay Gandhi National Park (forest) is a short distance away and can be seen from the main road, as can portions of Vasai Creek."
    />
    <Protected><PilBotRight /></Protected>
    </div>
    <Footer />
    </div>
  )
}


export default Apsit;