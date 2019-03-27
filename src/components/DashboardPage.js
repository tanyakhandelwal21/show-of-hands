import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { startAnswerPoll, startGetPoll } from '../actions/polls';
import getPoll from '../selectors/get-poll';

let UID;
let user = firebase.auth();

class DashboardPage extends React.Component {
    render() {
        user = firebase.auth().currentUser;
        if (user) console.log(user); else console.log("No user found.");
        return (
            <div>

                <h1>
                    <img
                    src={user.photoURL}
                    alt={user.displayName + "'s profile picture"}
                    width="70"
                    height="70"/>
                    {user.displayName}'s Dashboard
                </h1>
                <p>Email:           {user.email}</p>
                <p>User ID:         {user.uid}</p>
                <p>Phone number:    {user.phoneNumber ? user.phoneNumber : "None provided"}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	const poll = getPoll(state.poll);
	// console.log("State:");
	// console.log(state);
	const uid = state.auth.uid;
    UID = uid;
	return { poll, uid };
};

export default connect(mapStateToProps)(DashboardPage);
