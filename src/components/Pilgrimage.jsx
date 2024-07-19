import React,{ useState} from 'react';
import {useHistory} from 'react-router-dom';
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import TourCard from './TourCard';
import Search from './Search';
import Footer from "./Footer";
import './css/Pilgrimage.css';
import tiru from "../images/tirupati-balaji-temple.jpg";
import siddhi from "../images/siddhivinayak.jpg";
import gold from "../images/golden-temple.jpg";
import lotus from "../images/lotus-temple.jpg";
import ram_mandir from "../images/ayodhya.jpg";

import church from "../images/church.jpg";
import hanuman from "../images/hanuman-mandir.jpg";
import Map1 from '../maps/Map1'; // Import Map1 component
import Map2 from '../maps/Map2'; // Import Map2 component
import Map3 from '../maps/Map3';
import Map4 from '../maps/Map4';
import Map5 from '../maps/Map5';
import Map6 from '../maps/Map6';
import Card from 'react-bootstrap/Card';
import apsit from "../images/apsit.jpeg"


const Pilgrimage = () => {
   const [searchTerm, setSearchTerm] = useState([])
    const [mapToShow, setMapToShow] = useState(Map1);

    const cards = [
      {
        id:1, title: 'Shree Ram Mandir', subtitle: 'Sai Nagar, Ayodhya, Uttar Pradesh 224123', image: ram_mandir, text: 'This is a longer card with supporting text below as a natural lead-in to additional content.' , onMouseEnter:() => handleCardHover(<Map2 />) , onClick:() => handleClick('/rammandir')
      },
      {
        id:2, title: 'Shree Siddhivinayak Temple', subtitle: 'SK Bole Rd, Prabhadevi, Mumbai, Maharashtra 400028', image: siddhi, text: 'This is another card.' , onMouseEnter:() => handleCardHover(<Map1 />) , onClick:() => handleClick('/rammandir')
      },
      {
        id:3, title: 'Tirupati Balaji Temple', subtitle: 'Pocket J, Type 2, Presidents Estate, New Delhi, Delhi 110001', image: tiru, text: 'This is another card.' , onMouseEnter:() => handleCardHover(<Map4 />) , onClick:() => handleClick('/rammandir')
      },
      {
        id:4, title: 'Lotus Temple', subtitle: 'Lotus Temple Rd Bahapur, Kalkaji, New Delhi, Delhi 110019', image: lotus, text: 'This is another card.' , onMouseEnter:() => handleCardHover(<Map3 />) , onClick:() => handleClick('/rammandir')
      },
      {
        id:5, title: 'Hanuman Mandir', subtitle: '324, Saraswati Marg, Karol Bagh, New Delhi 110005', image: hanuman, text: 'This is another card.' , onMouseEnter:() => handleCardHover(<Map5 />) , onClick:() => handleClick('/rammandir')
      },
      {
        id:6, title: 'A.P Shah Institute of Technology', subtitle: 'GhodBunder Road,Thane - 400615, Opp.Hypercity Mall', image: apsit, text: 'This is another card.' , onMouseEnter:() => handleCardHover(<Map6 />) , onClick:() => handleClick('/apsit')
      }
    ];


    const handleCardHover = (mapComponent) => {
      setMapToShow(mapComponent);
    };

    const history = useHistory()
    const handleClick = (url) => {
        history.push(url);
    } 
    return (
      <>
        <Navbar />
        
        <div className="pilgrim-main">
          <div className="pilgrim-left">
            <div className="pilgrim-search">
                {/* <Search /> */}
                <Card className='card-css' style={{ width: '80%', margin: '30px', height: '150px' }}>
                <input id='searchInput' type='text' placeholder='Search here..' onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}/>
                </Card>
            </div>

            <div className="react-card">
            {/* <TourCard
              title="Shree Ram Mandir "
              subtitle="Sai Nagar, Ayodhya, Uttar Pradesh 224123"
              image={ram_mandir}
              text="This is a longer card with supporting text below as a natural lead-in to additional content."
              onMouseEnter={() => handleCardHover(<Map2 />)}
              onClick={() => handleClick('/rammandir')}
            />
            <TourCard
              title="Shree Siddhivinayak Temple"
              subtitle="SK Bole Rd, Prabhadevi, Mumbai, Maharashtra 400028"
              image= {siddhi}
              text="This is another card."
              onMouseEnter={() => handleCardHover(<Map1 />)}
            />
            <TourCard
              title="Tirupati Balaji Temple"
              subtitle="Pocket J, Type 2, President's Estate, New Delhi, Delhi 110001"
              image= {tiru}
              text="This is another card."
              onMouseEnter={() => handleCardHover(<Map4 />)}
            />
            <TourCard
              title="Lotus Temple"
              subtitle="Lotus Temple Rd Bahapur, Kalkaji, New Delhi, Delhi 110019"
              image = {lotus}
              text="This is another card."
              onMouseEnter={() => handleCardHover(<Map3 />)}
            />
            <TourCard
              title="Hanuman Mandir"
              subtitle="324, Saraswati Marg, Karol Bagh, New Delhi 110005"
              image = {hanuman}
              text="This is another card."
              onMouseEnter={() => handleCardHover(<Map5 />)}
            />
            <TourCard
              title="Shimla Christ Church"
              subtitle="Ridge To US Club, The Mall, Shimla, Himachal Pradesh 171001"
              image = {church}
              text="This is another card."
              onMouseEnter={() => handleCardHover(<Map6 />)}
            /> */}
            {
  cards
    .filter((val) => {
      if(searchTerm == ""){
        return val;
      }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
      }
    })
    .map((val) => {
      return (
        <TourCard key={val.id} title={val.title} subtitle={val.subtitle} image={val.image} text={val.text} onMouseEnter={val.onMouseEnter} onClick={val.onClick}/>
      )
    })
  }
            
            </div>
          </div>
          <div className="map-container">
            {mapToShow}
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Pilgrimage
