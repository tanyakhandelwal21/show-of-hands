import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import './App.css';
import LoginForm from './LoginForm';
import CreateForm from './CreateForm';
// import firebase from 'firebase/app';
import 'firebase/auth';



class App extends Component {

	state = {
		user: null
	}

	componentDidMount(){
		firebase.auth().onAuthStateChanged((user) => {
			this.setState({user})
		  if (user) {
		    // User is signed in.
		    console.log("Current User:", user)
		  } else {
		    // No user is signed in.
		    console.log('User is not signed in.')
		  }
		});
	}

  render() {
  	const { user } = this.state;
    return (
      <div className="App">
        <LoginForm user={user} />
      </div>
    );

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;

  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
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
