import React from "react";
import Card_b from '../components/card'
import Search from "../components/search";
import img from '../images/akshardham.jpg';
import img2 from '../images/lotus-temple.jpg';
import img3 from '../images/tirupati-balaji-temple.jpg';
import img4 from '../images/golden-temple.jpg'
import img5 from '../images/ram-mandir.jpg'
import img6 from '../images/Shree-Siddhivinayak-Ganpati-Temple.jpg'
import A1img from '../images/A1.gif'
import '../components/expandable.css'
import '../components/blog.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";


const Blog2 = () => {
  return (
    <div>
        <div className="main">
        <Navbar />
    <div className='blog_leftside' style={{width : "70%",float : "left"}}>
    <div className="main-wrapper-boxed">
        <center><img src={img2} alt=''></img></center>
        <h1>A Flight To The Marvelous World Of Akshardham Temple</h1>
        <h2>Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture.The main attraction of the Swaminarayan Akshardham complex is the Akshardham Mandir. It rises 43-metre (141 ft) high, spans 96-metre (316 ft) wide, and extends 109-metre (356 ft) long.It is intricately carved with flora, fauna, dancers, musicians, and deities.It is located on the banks of the Yamuna River.</h2>
        <div className="vertical"></div>
        <b>Swaminarayan Akshardham is a Hindu temple, and spiritual-cultural campus in Delhi, India. The temple is close to the border with Noida. Also referred to as Akshardham Temple or Akshardham Delhi, the complex displays millennia of traditional and modern Hindu culture, spirituality, and architecture. </b><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br />
        <h2>The Akshardham Mandir was designed by BAPS Swamis and Virendra Trivedi, a member of the Sompura family.It is entirely constructed from Rajasthani pink sandstone and Italian Carrara marble. Based on traditional Hindu architectural guidelines (Shilpa shastras) on maximum temple life span, it makes no use of ferrous metal. Thus, it has no support from steel or concrete.The architecture is inspired by the Māru-Gurjara architecture style.
The mandir also consists of 234 ornately carved pillars, nine domes, and 20,000 murtis of swamis, devotees, and acharyas.The mandir also features the Gajendra Pith at its base, a plinth paying tribute to the elephant for its importance in Hindu culture and India's history. It contains 148 life sized elephants in total weighing a total of 3000 tons.</h2>
        <img src={A1img} alt='' className='A1'></img>
        <img src={A1img} alt='' className='A2'></img>
        <img src={A1img} alt='' className='A3'></img>
        <NavLink to="/blog" className="readless">READ LESS</NavLink>
        </div>
    </div>
    <div className='blog_rightside' style={{width : "30%", height : "575px",float : "left"}}>
        <Search />
    </div>
    </div>
    <Footer />
    </div>
    
  );
}

export default Blog2;