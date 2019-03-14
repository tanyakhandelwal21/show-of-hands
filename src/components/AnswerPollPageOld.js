import React from 'react';
import { connect } from 'react-redux';
import AnswerPollForm from './AnswerPollForm';
import { startGetPoll } from '../actions/polls';

export const AnswerPollPage = (poll) => {
    console.log("poll:", poll);
    return (
        <div>
            <AnswerPollForm poll={poll}/>
        </div>
    );
}

const mapDispatchToProps = (dispatch, route) => {
    const pollId = route.location.pathname.match(/\/polls\/answer\/(.*)/)[1];
    console.log("poll id:", pollId);
    return dispatch(startGetPoll({ id: pollId }));
};

export default connect(undefined, mapDispatchToProps)(AnswerPollPage);
