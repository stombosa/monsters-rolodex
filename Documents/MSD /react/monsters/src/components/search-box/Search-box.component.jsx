import React from 'react';
import './Search-box.style.css';

const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    // () => console.log(this.state)
    // console.log(this.state)//remember setstae is asynch
    ></input >
)

export default SearchBox