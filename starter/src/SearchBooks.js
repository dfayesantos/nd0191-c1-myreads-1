import React, { useEffect, useState } from "react"
import "./App.css";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";

const SearchBooks = ({ books }) => {

    const [query, setQuery] = useState("");

    const updateQuery = (event) => {
      const { value } = event.target;
      setQuery(value);
      console.log(showingBooks.length)
    };
  
    const showingBooks=
    query === ""
      ? books
      : books.filter((c) =>
          c.title.toLowerCase().includes(query.toLowerCase())
        );

      console.log('SHOWING BOOKS: ' + JSON.stringify(showingBooks))

  return (
    
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        href="/"
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={updateQuery}
        />
      </div>
    </div>
    <div className="search-books-results">
      {/* {showingBooks.length > 0 && <ListBooks books={showingBooks}></ListBooks>} */}
    </div>
    {showingBooks.length > 0 && <ListBooks books={showingBooks}></ListBooks>}
  </div>
  );
};

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired
  };

export default SearchBooks;