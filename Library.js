
import './Library.css';
import React from 'react';
import { useState, useEffect } from 'react';


function Library() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/collections')
    .then((res) => res.json())
    .then((data)=> setCollections(data))
    .catch((err)=> console.error('cant catch',err));

  }, []);
  
  
    return (
  
      <div className='content-container'>
      <h1>Your Library </h1>
      <p>View all of your bookshelves here!</p>

      </div>
);
}


export default Library;