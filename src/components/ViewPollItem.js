import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import PollListItem from './PollListItem';
import getPoll from '../selectors/get-poll';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ViewPollItem = ({ poll }) => {
  if (!poll || !poll.id) { return null; }
  const {
    id, numberOfOptions, createdAt, description
  } = poll;

  return (
    <div>
      <Link to={`/dashboard/polls/${id}`}>
        <h2>{description}</h2>
      </Link>
      <p>
        {numeral(numberOfOptions / 100).format('$0,0.00')}
        -
        {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
      <hr />
      <Link to={`/dashboard/polls/${id}/edit`}>
        <button>
          Edit
        </button>  
      </Link>
      <Link to={`/dashboard/polls/${id}/delete`}>
        <button>
          Delete
        </button>  
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  const poll = getPoll(state.poll);
  return {
    poll
  };
};

export default connect(mapStateToProps)(ViewPollItem);
