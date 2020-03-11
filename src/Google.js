import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../src/config/firebaseConfig';
import {FaGoogle} from 'react-icons/fa';
import Header from './Header.js'
import {
  Link
} from 'react-router-dom'


 class Google extends Component{


  render(){
    const {
  user,
  signOut,
  signInWithGoogle,
} = this.props;
return (
  <div className="Login">
  <Header/>
    <header className="Google-header">
      {
        user
          ? <p><Link to="/account">{user.displayName}</Link></p>
          : <p></p>
      }
      {
        user
         ? <button onClick={signOut}>Sign out</button>
          : <button onClick={signInWithGoogle}><FaGoogle className="Google_icon"/>Google</button>
      }
    </header>
  </div>
);
  }
}

const firebaseApp = firebase.initializeApp(firebaseConfig);


const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
     providers,
     firebaseAppAuth,
}) (Google);
