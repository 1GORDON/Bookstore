import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  return (
    <li key={book.item_id}>
      <span>{` ${book.title} `}</span>
      <span>{`${book.category} `}</span>
      <button type="button" onClick={() => dispatch(deleteBook(book.item_id))}>Delete Book</button>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
