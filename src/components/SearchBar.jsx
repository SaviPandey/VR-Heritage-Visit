import React, { useState } from "react";
import './css/searchBar.css'; // Import your CSS file
import {useHistory} from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  // const handleChange = (event) => {
  //   setQuery(event.target.value);
  // };

  const handleSubmit = () => {
    history.push(`${query}`)
  };

  return (
    <form className="search-bar-container" onSubmit={handleSubmit}>
        <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            placeholder="Enter Keyword here..."
        />
        <button type="submit" className="search-button" onClick={handleSubmit}>
            SEARCH <i className="fas fa-search"></i>
        </button>
    </form>
  );
};

export default SearchBar;
