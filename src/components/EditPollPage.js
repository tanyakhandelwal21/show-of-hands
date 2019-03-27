import React from 'react';
import { connect } from 'react-redux';
import PollForm from './CreateForm';
import { startEditPoll, startRemovePoll, startGetPoll } from '../actions/polls';
import getPoll from '../selectors/get-poll';

export class EditPollPage extends React.Component {
	constructor (props) {
	super(props);
	this.onSubmit = this.onSubmit.bind(this);
	this.onRemove = this.onRemove.bind(this);
	}
	onSubmit (poll) {
	startEditPoll(this.props.poll.id, poll)(() => {
		location.reload();
	})
	}
	onRemove (poll) {
	startRemovePoll(this.props.poll.id)(() => {
		location = "/welcome";
	})
	}
	render() {
	if (!this.props.poll || !this.props.poll.id) {
		return null;
	}
	return (
		<div>
		<div className="page-header">
			<div className="content-container">
			<h1 className="page-header__title">Edit Poll</h1>
			</div>
		</div>
		<div className="content-container">
			<PollForm
			poll={this.props.poll}
			onSubmit={this.onSubmit}
			/>
			<button className="button button--secondary" onClick={this.onRemove}>Remove Poll</button>
		</div>
		</div>
	);
	}
};

/*const mapStateToProps = (state, props) => ({
	poll: state.polls.find((poll) => poll.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditPoll: (id, poll) => dispatch(startEditPoll(id, poll)),
	startRemovePoll: (data) => dispatch(startRemovePoll(data))
});*/


const mapStateToProps = (state) => {
	const poll = getPoll(state.poll);
	return {
	poll
	};
};

const mapDispatchToProps = (dispatch, route) => {
	const pollId = route.location.pathname.match(/\/polls\/(.*)\/edit\/?/)[1]
	return dispatch(startGetPoll({
	id: pollId,
	edit: true
	}))
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPollPage);
