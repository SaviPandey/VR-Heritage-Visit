import React,{ useState }  from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Card_b from './Card';
import SearchBar from "./SearchBar";
import Search from "./Search";
import "./css/Blog.css";

import tiru from "../images/tirupati-balaji-temple.jpg";
import siddhi from "../images/siddhivinayak.jpg";
import gold from "../images/golden-temple.jpg";
import lotus from "../images/lotus-temple.jpg";
import ram_mandir from "../images/ayodhya.jpg";


const Blog = () => {

  // const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const cards = [
    { id:1, title: 'Akshardham Temple, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/akshardham', image: ram_mandir },
    { id:2, title: 'Lotus Temple, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/lotus', image: tiru },
    { id:3, title: 'Ram mandir Temple, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/akshardham', image: lotus },
    { id:4, title: 'Tirupati Balaji Temple, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/contact', image: siddhi },
    { id:5, title: 'Hanuman Mandir, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/contact', image: gold },
    { id:6, title: 'Shimla Christ Church, New Delhi', description: 'A Flight To The Marvelous World Of Akshardham Temple', link: '/contact', image: siddhi }
  ];
  
  

//   const handleSearch = (query) => {
//     console.log("Searching for:", query);
//     const filtered = cards.filter(card =>
//       card.title.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredCards(filtered);
// };

    return (
      <>
        <Navbar />
        <div className='blog-main'>
          <div className='blog-left'>
          {/* {filteredCards.length > 0 ? (
  filteredCards.map((card) => (
    <Card_b key={card.title} src={card.image} date="13" day="Aug" name={card.title} details={card.description} link={card.link} />
  ))
) : (
  cards.map((card) => (
    <Card_b key={card.title} src={card.image} date="13" day="Aug" name={card.title} details={card.description} link={card.link} />
  ))
)} */}
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
        <Card_b key={val.id} src={val.image} date="13" day="Aug" name={val.title} details={val.description} link={val.link} />
      )
    })
}
</div>

          <div className="blog-right">
             <div className="blog-right-upper">
                {/* <Search onSearch={handleSearch}/> */}
                <input id='searchInput' type='text' placeholder='Search here..' onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}/>
             </div>
             <div className="blog-right-bottom">
                {/* <h3>right bottm</h3> */}
             </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };

export default Blog