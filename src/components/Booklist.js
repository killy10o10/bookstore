import React from 'react';
import Book from './Book';
import AddBook from './Addbook';

class BookList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          title: 'The Hunger Games',
          author: 'Suzanne Collins',
          id: 1,
        },
        {
          title: 'Dune',
          author: 'Frank herbert',
          id: 2,
        },
        {
          title: 'Capital in the Twenty-First Century',
          author: 'Suzanne Collins',
          id: 3,
        },
      ],
    };
  }

  render = () => {
    const { books } = this.state;
    return (
      <div>
        {
          books.map((book) => (
            <Book key={book.id} title={book.title} author={book.author} />
          ))
        }
        <AddBook />
      </div>
    );
  };
}

export default BookList;
