import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import PropTypes from 'prop-types';
import { removeBook, removeBookThunk } from '../redux/books/books';

const Book = (props) => {
  const {
    title, author, category, id,
  } = props;
  const books = useSelector((state) => state.books);
  const del = useDispatch();
  const handleClick = () => {
    del(removeBook(books.find((book) => book.title === title)));
    del(removeBook(books.find((book) => book.id === id)));
    del(removeBookThunk(id));
  };
  return (
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>
      <div>
        <button type="button" onClick={handleClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
