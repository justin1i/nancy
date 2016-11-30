import { hashHistory } from 'react-router'; 
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import reducers from './reducers';

const middlewares = [thunk, routerMiddleware(hashHistory)];
 if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store;

export const history = syncHistoryWithStore(hashHistory, store);