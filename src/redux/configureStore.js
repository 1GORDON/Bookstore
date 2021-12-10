import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import booksReducer from './books/book';

const store = configureStore({
  reducer: { books: booksReducer },
  middleware: (getDefaltMiddleware) => getDefaltMiddleware().concat(logger),
});

export default store;
