import React from 'react';
import { connect } from 'react-redux';
import PollItem from './PollListItem';
import { startGetPoll } from '../actions/polls';

const ViewPollPage = (props) => (
	<div>
		<PollItem {...props.poll} />
	</div>
)
 

const mapDispatchToProps = (dispatch, a) => {
	debugger
	return dispatch(startGetPoll())
};

export default connect(undefined, mapDispatchToProps)(ViewPollPage);
