import React from 'react'
import '../App.css'

export default function SearchBar({setSearchValue, searchValue}) {
  //send response on click of search
  const handleButtonClick = () => {
    const searchInputValue = document.getElementById("searchInput").value;
    setSearchValue(searchInputValue);
  };

  //send response on input change
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }; 
  return (
    <div class="search-container">
    <input id='searchInput' type="text" placeholder="Search..."  value={searchValue} onChange={handleInputChange}/>
    <button onClick={()=>handleButtonClick()} className='search-btn' type="submit"><i className="fa fa-search"></i></button>
  </div>
  )
}
