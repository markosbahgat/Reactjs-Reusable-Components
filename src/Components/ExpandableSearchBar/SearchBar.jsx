import React, {useState} from 'react';
import './style.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css';

const handleShowSearch = () =>{
    const input = document.querySelector(".search");
    input.classList.toggle("active");
}
const handleClearSearch = () =>{
    const search = document.querySelector("#SearchBar");
    search.value = '';
}
const SearchBar = () => {
    return ( 
        <div>
            <div className="search">
                <div className="icon" onClick={handleShowSearch}></div>
                <div className="input"><input type="text" placeholder='Search....' id='SearchBar'/></div>
                <span className='clear' onClick={handleClearSearch}></span>
            </div>
        </div>
     );
}
 
export default SearchBar;