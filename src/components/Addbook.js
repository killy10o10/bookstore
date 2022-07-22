import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddBook() {
  const initialInputs = {
    author: '',
    title: '',
    id: uuidv4(),
  };

  const [values, setValues] = React.useState(initialInputs);

  const changeAuthor = (e) => {
    const newValue = {
      ...values,
      author: e.target.value,
    };
    setValues(newValue);
  };

  const changeTitle = (e) => {
    const newValue = {
      ...values,
      title: e.target.value,
    };
    setValues(newValue);
  };

  const add = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    add(addBook(values));
    e.target.reset();
  };

  return (
    <div>
      <h2>Add new Book</h2>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="Add Book"
          onChange={changeTitle}
          required
        />
        <input
          type="text"
          placeholder="Author"
          onChange={changeAuthor}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
