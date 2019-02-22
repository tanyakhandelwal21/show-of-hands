import React from 'react';
import { connect } from 'react-redux';
import PollListItem from './PollListItem';
import selectPolls from '../selectors/polls';
import firebase from 'firebase/app'

// import 'firebase/firestore'

/*
const db = firebase.firestore();

db.collection("cities").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});
*/

export const PollList = (props) => (
  <div>
    {
      (!props.polls || props.polls.length === 0) ? (
        <p>No polls</p>
      ) : (
          props.polls.map((poll) => {
            return <PollListItem data={poll} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  const polls = selectPolls(state.polls, state.filters)
  return {
    polls
  };
};

export default connect(mapStateToProps)(PollList);
