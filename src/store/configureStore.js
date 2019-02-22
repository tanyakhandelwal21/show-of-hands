import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import pollsReducer from '../reducers/polls';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  const store = createStore(
    combineReducers({
      auth: authReducer,
      polls: pollsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
