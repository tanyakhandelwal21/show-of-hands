import * as firebase from 'firebase';
import config from './firebase.config.js';
// import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set({
// 	name: 'Jia Lin Cheoh',
// 	age: 24,
// 	location: {
// 		city: 'Singapore',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	// console.log('Data is saved');
// }).catch((e) => {
// 	// console.log('This failed', e);
// });

// database.ref().set('This is my data.');

// database.ref('age').set(24);
// database.ref('location/city').set('New York');


// database.ref('attributes').set({
// 	height: 73,
// 	weight: 150
// }).then(() => {
// 	// console.log('Second set call worked.');
// }).catch((e) => {
// 	// console.log('Things didnt for the second error', e);
// });
// // attributes
// // height
// // weight

// console.log('I made a request to change the data.');

// database.ref('isCSMAJOR')
// 	.remove()
// 	.then(() => {
// 		// console.log('Data was removed');
// 	}).catch((e) => {
// 		// console.log('Did not remove data', e);
// 	});





























