import { combineReducers } from 'redux';
import { routerReducer  } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import ui from './ui';
import notification from './notification';
import books from './books';
import authors from './authors';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  ui,
  notification,
  books,
  authors,
});
