import React, { useEffect, useState } from "react"
import "./App.css";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = ({ books, updateBookShelf }) => {

    const [query, setQuery] = useState("");
    const [showingBooks, setShowingBooks] = useState(books);

    const updateQuery = (event) => {
      const { value } = event.target;
      setQuery(value);
    };

    const getBooks = async (query) => {
      if (query === '') {
        setShowingBooks([])
      } else {
        const res = await BooksAPI.search(query, 20);
        setShowingBooks(res);
      }
    };
    

    useEffect(() => {
        getBooks(query);
    }, [query]);

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
          placeholder="Search by title or author"
          value={query}
          onChange={e=> updateQuery(e)}
        />
      </div>
    </div>
    <div className="search-books-results">
      {/* {showingBooks.length > 0 && <ListBooks books={showingBooks}></ListBooks>} */}
    </div>
    {showingBooks?.length > 0 && (<ListBooks books={showingBooks} updateBookShelf={updateBookShelf}></ListBooks>)}
  </div>
  );
};

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func,
  };

export default SearchBooks;