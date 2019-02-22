import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import pollsReducer from '../reducers/polls';
import pollItemReducer from '../reducers/poll-item';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  const store = createStore(
    combineReducers({
      auth: authReducer,
      polls: pollsReducer,
      poll: pollItemReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
