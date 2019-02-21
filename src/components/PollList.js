import React from 'react';
import { connect } from 'react-redux';
import PollListItem from './PollListItem';
import selectPolls from '../selectors/polls';

export const PollList = (props) => (
  <div>
    {
      (!props.polls || props.polls.length === 0) ? (
        <p>No polls</p>
      ) : (
          props.polls.map((poll) => {
            return <PollListItem key={poll.id} {...poll} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    polls: selectPolls(state.polls, state.filters)
  };
};

export default connect(mapStateToProps)(PollList);
