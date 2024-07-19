import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FaSearch } from 'react-icons/fa';
import './css/Search.css';

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // You can perform your search action here using the searchQuery state
    console.log('Search Query:', searchQuery);
    props.onSearch(searchQuery)
    // Example: Perform an API call or filter data based on searchQuery
  };

  return (
    <div className="blog-search">
      <Card className='card-css' style={{ width: '80%', margin: '30px', height: '150px' }}>
        <h2>SEARCH</h2>
        <div className="search-item">
          <input
            placeholder='What are you looking for?'
            className='blogInput'
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button type="button" className="sr-but-blog" onClick={handleSearch}>
            <FaSearch />
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Search;
