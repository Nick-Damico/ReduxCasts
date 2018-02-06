import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// Any key provided here to our combineReducers
// Ends up as a key on our global state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
})

export default rootReducer;
