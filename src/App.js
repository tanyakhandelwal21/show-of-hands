import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm'


// This import loads the firebase namespace.
import firebase from 'firebase/app';

// These imports load individual services into the firebase namespace.
import 'firebase/auth';
// import 'firebase/database';

firebase.initializeApp({
	apiKey: "AIzaSyBusHXXdt9QtbtFfSE9zlSV5Hjwrx6rPRo",
    authDomain: "Show of Hands!",
    databaseURL: "https://bolt-33b49.firebaseio.com",
    projectId: "bolt-33b49",
    storageBucket: "bolt-33b49.appspot.com",
    messagingSenderId: "578966418932"
})




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
  }
}

export default App;
