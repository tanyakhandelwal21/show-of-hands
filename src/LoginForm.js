import React from 'react';
import './LoginForm.css';
//import bootstrapLogoImg from './images/bootstrap-solid.svg'
import firebase from 'firebase/app';


class LoginForm extends React.Component {

  signOut = () => {
    firebase.auth().signOut();
  }


  googleSignIn = (e) => {
    e.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(token, user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(errorCode, errorMessage, email, credential);
    });
  }

  render(){
    const { user } = this.props;


    return (
       <form className="form-signin">



       {/*}
        <img className="mb-4" src={bootstrapLogoImg} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
        <label htmlFor="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        */}

        <div className="loginContainer">
        { user ?
          (<div>
            <p>You are logged in as {user.displayName || user.email}</p>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signOut}>Log out</button>
            </div>)
          :
          <button className="btn btn-lg btn-primary btn-block" onClick={this.googleSignIn}>Login with Google</button>
        }

        </div>


        <p className="mt-5 mb-3 text-muted">&copy; 2018</p>
      </form>
      )
  }
}

export default LoginForm;
