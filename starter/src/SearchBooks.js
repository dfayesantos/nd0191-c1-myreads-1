import React, { useEffect, useState } from "react"
import "./App.css";
import PropTypes from "prop-types";
import ListBooks from "./ListBooks";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = ({ books, updateBookShelf }) => {

    const [query, setQuery] = useState("");
    const [showingBooks, setShowingBooks] = useState([]);

    const updateQuery = (event) => {
      const { value } = event.target;
      setQuery(value);
    };

    const searchBooks = async (query) => {
      if (query === '') {
        setShowingBooks([])
      } else {
        const res = await BooksAPI.search(query, 20)
        
          await res?.forEach(book => {
          const item = books.find(b => (b.id === book.id))
          if (item) {
            book.shelf = item.shelf
          } else {book.shelf = "none"}
        }
          )
         
          await setShowingBooks(res)
    }};

    useEffect(() => {
        searchBooks(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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