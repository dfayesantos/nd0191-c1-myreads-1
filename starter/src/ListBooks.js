import PropTypes from "prop-types";
import "./App.css";

const ListBooks = ({ books, filter, updateBookShelf }) => {

    const changeBookShelf = (book, e) => {

      updateBookShelf(book, e.target.value)
    }

    const filteredBooks =
    filter === ""
      ? books
      : books.filter((c) =>
          c.shelf === filter);

  return (
    <ol className="books-grid">
    {filteredBooks.map((book) => (
      <li key={book?.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
              `url(${book?.imageLinks?.smallThumbnail})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select defaultValue={book?.shelf ? book?.shelf : "none"} onChange={e => changeBookShelf(book, e)}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title ? book.title : "*No title"}</div>
        {book.authors ? (book?.authors?.map((author, index) => <div key={index} className="book-authors">{author}</div>)) : "No author"}
      </div>
    </li>
    ))}
    </ol>
  );
};

ListBooks.propTypes = {
  books: PropTypes.array.isRequired,
  // filter: PropTypes.string,
  updateBookShelf: PropTypes.func,
};

export default ListBooks;