import './Read.css';
import React from 'react';

import { useState, useEffect } from 'react';

function Read() 
{
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = async () => {
    // Handle search logic here
    try {
      console.log('Search button clicked');

      const response = await fetch
      (
        'http://localhost:8080/api-search-title',
        {
          method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchTerm }),
        }
      );
           
      const data = await response.json();
      console.log('Data:', data);
      setBooks(data.items);
        
    } catch (error) {  
      console.error('Error fetching data:', error);  
    }
  };

  useEffect(() => {}, [books]);

  return (
        
    <div className="Read-container">
      <h1>Reading </h1>
            <p>Search for a book here!</p>
            <input
                value={searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value);

                }}
                placeholder="Search for a book"
            ></input>
            <button
                onClick={() => {
                    handleSearch();
                }}
            >
                {'Search'}
            </button>

           
            {books.map((book, index) => {
              return(
                <div
                  className = "book-item"
                  key={index}
                  onClick={() => {
                    setSelectedBook(book);
                    setIsOpen(true);
                  }}
                
                  >
                    <h4> {book.volumeInfo.title}</h4>
                    <p>By: {book.volumeInfo.authors?.join(',')}</p>
                </div>
              );
            })}
        

          {isOpen && selectedBook && (
            <div className="modal-overlay" onClick={() => setIsOpen(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>{selectedBook.volumeInfo.title}</h2>
                <p><strong>Author(s):</strong> {selectedBook.volumeInfo.authors?.join(', ')}</p>
                <p><strong>Description:</strong> {selectedBook.volumeInfo.description || 'No description available.'}</p>
                <button></button>
                <button onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
          )}

        </div>
      
      );
}

  


export default Read;
