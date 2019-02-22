import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectPolls from '../selectors/polls';
import selectPollsTotal from '../selectors/polls-total';

export const PollsSummary = ({ pollCount, pollsTotal }) => {
  const pollWord = pollCount === 1 ? 'poll' : 'polls' ;
  const formattedPollsTotal = numeral(pollsTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing <b>{pollCount}</b> {pollWord}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {

  const visiblePolls = selectPolls(state.polls, state.filters);

  return {
    pollCount: visiblePolls ? visiblePolls.length : 0,
    pollsTotal: selectPollsTotal(visiblePolls)
  };
};

export default connect(mapStateToProps)(PollsSummary);
