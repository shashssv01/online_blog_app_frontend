import React, { useState } from "react";
import './Searchbar.css';

const Searchbar: React.FC = () =>{
    // This initail line <string> is for the useState('') which accepts a initial value of string
    const[query , setQuery ] = useState<string>('');

    //Type Script annotation for change in events
    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setQuery(event.target.value);
    }

    const handleSearch = () => {
        console.log(`Searching for: ${query}`);
        // Add logic to filter or fetch data based on the query
      };
    return (
        <div className="search-bar-container">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="search-bar-input"
          />
          <button onClick={handleSearch} className="search-bar-button">
            Search 
          </button>
        </div>
      );
};

export default Searchbar;


