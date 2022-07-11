import "./App.css";
import React, { useState, useEffect } from "react";
import ShelvedBooks from "./ShelvedBooks"
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ListBooks from "./ListBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
      console.log(res)
    };
    getBooks();
  }, []);

  const updateBookShelf = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    const updatedBooks = await BooksAPI.getAll();
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
    <Routes>
      <Route
        exact
        path="/"
        element={
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
        }
      />
      <Route
        path="/search"
        element={
          <div className="list-books-content">
      <div>
          <div className="bookshelf">
          <div className="bookshelf-books">
            <SearchBooks books={books}></SearchBooks>
          </div>
        </div>
        </div>
        </div>
        }
      />
    </Routes>
    </div>
  );
}

export default App;
