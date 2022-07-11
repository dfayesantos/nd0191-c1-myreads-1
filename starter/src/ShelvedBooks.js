import React from "react"
import "./App.css";
import ListBooks from "./ListBooks";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShelvedBooks = ({books, updateBookShelf}) => {

  return (
    
    <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <Link to="/search">
          Add Contact
        </Link>
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ListBooks books={books} filter="currentlyReading" updateBookShelf={updateBookShelf}></ListBooks>
        </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ListBooks books={books} filter="wantToRead" updateBookShelf={updateBookShelf}></ListBooks>
          </div>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ListBooks books={books} filter="read" updateBookShelf={updateBookShelf}></ListBooks>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

ShelvedBooks.propTypes = {
    books: PropTypes.array.isRequired,
  };

export default ShelvedBooks;