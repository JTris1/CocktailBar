import React from 'react';
import './Search.css';

export default function Search(props) {
  // Reference to search box to access value later on
  let searchBox = document.getElementById("searchBox");

  return (
    <form 
      onSubmit={e => {
        e.preventDefault();
        props.getSearchResults(searchBox.value)
      }}
    >
        <input type="search" name="search" className='form-control' id='searchBox' placeholder='Search for a drink, category, or ingredient' />
        <button type='button' className='btn btn-primary' onClick={() => props.getSearchResults(searchBox.value)}>Submit</button>
    </form>
  )
}