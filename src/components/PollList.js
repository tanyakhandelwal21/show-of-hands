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

class PollList extends React.Component {

  render () {

    const props = this.props;

    if (!props.polls || props.polls.length === 0) {
      return <p>No polls</p>;
    }

    const pollItems = props.polls.map((poll) => {
      return <PollListItem key={poll.id} data={poll} />;
    })

    return <div>

      {pollItems}
    </div>
  }
}

const mapStateToProps = (state) => {
  const polls = selectPolls(state.polls, state.filters)
  return {
    polls
  };
};

export default connect(mapStateToProps)(PollList);
