import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import database from './firebase/firebase';
import firebase from 'firebase/app'

import LoadingPage from './components/LoadingPage';
import './App.css';
import LoginForm from './LoginForm';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import './firebase/firebase';
// import { addPoll } from './actions/polls';
// import { setTextFilter } from './actions/filters';
// import getVisiblePolls from './selectors/polls';


const store = configureStore();
const App = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const renderLoading = () => {
  ReactDOM.render(<LoadingPage />, document.getElementById('app'));
}

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(App, document.getElementById('app'));
    hasRendered = true;
  }
};

renderLoading()

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const fbUser = {
      id: user.uid,
      metadata: {
        creation_time: user.metadata.creationTime,
        last_signin_time: user.metadata.lastSignInTime
      },
      display_name: user.displayName,
      photo_url: user.photoURL,
      provider_id: user.providerId,
      email: user.email
    }
    database.ref('users').child(fbUser.id).set(fbUser);
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});


export { renderApp, renderLoading, App as default }