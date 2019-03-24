import React from 'react';
import { connect } from 'react-redux';
import ViewPollItem from './ViewPollItem';
import { startGetPoll } from '../actions/polls';

class ViewPollPage extends React.Component {
	render () {
		return <div>
			<ViewPollItem />
		</div>
	}
}

const mapDispatchToProps = (dispatch, route) => {
	const pollId = route.location.pathname.match(/\/polls\/(.*)\/?/)[1]
	return dispatch(startGetPoll({
		id: pollId
	}))
};

export default connect(undefined, mapDispatchToProps)(ViewPollPage);
