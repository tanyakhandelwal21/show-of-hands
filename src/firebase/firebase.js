import * as firebase from 'firebase';
import config from './firebase.config.js';

console.log(config);
firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
