import React from 'react';
import { connect } from 'react-redux';
import PollForm from './PollForm';
import { startAddPoll } from '../actions/polls';

export class AddPollPage extends React.Component {
	constructor (props) {
	super(props);
	this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit (poll) {
	this.props.startAddPoll(poll);
	this.props.history.push('/');
	}
	render() {
	return (
		<div>
		<h1>Add Poll</h1>
		 <PollForm
			onSubmit={this.onSubmit}
			/>
		</div>
	);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startAddPoll: (poll) => dispatch(startAddPoll(poll))
});

export default connect(undefined, mapDispatchToProps)(AddPollPage);
