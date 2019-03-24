import React from 'react';
import { connect } from 'react-redux';
import AnswerPollForm from './AnswerPollFormOld';
import { startGetPoll } from '../actions/polls';
import getPoll from '../selectors/get-poll';



export class AnswerPollPage extends React.Component {
	render () {
	
	if (!this.props.poll || !Object.keys(this.props.poll).length) {
		return null
	}


		return (
			<div>
				<AnswerPollForm poll={this.props.poll}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	const poll = getPoll(state.poll);
	const uid = state.auth.uid
	return { poll, uid };
};

const mapDispatchToProps = (dispatch, route) => {
	const pollId = route.location.pathname.match(/\/polls\/(.*)\/answer\/?/)[1]
	return dispatch(startGetPoll({
		id: pollId
	}))
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPollPage);
