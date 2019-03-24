import React from 'react';
import { connect } from 'react-redux';
import PollForm from './CreateForm';
import { startEditPoll, startGetuser, startGetPoll } from '../actions/polls';
import getPoll from '../selectors/get-poll';

class AnswerPollForm extends React.Component {
	constructor(props) {
		super(props);
debugger
		this.answerChoices = this.props.poll.choices.slice();
		for (let i = 0; i < this.answerChoices.length; i++) {
			this.answerChoices[i].isSelected = false;
		}
		this.selectedChoice = null;
		this.handleChoiceClick = this.handleChoiceClick.bind(this);
	}

	handleChoiceClick(e) {
		for (let i = 0; i < this.answerChoices.length; i++) {
			if (this.answerChoices[i].text === e.target.value) {
				this.answerChoices[i].isSelected = true;
				this.selectedChoice = this.answerChoices[i];
			} else {
				this.answerChoices[i].isSelected = false;
			}
		}
	}

	handleSubmit() {
		// TODO: Add username to responders array
		const user = startGetUser();
		const poll = this.props.poll;
		if (!poll.responders) {
			poll.responsers = [user.id];
		} else {
			poll.responders = poll.responders.concat([users.id]);
		}
		for (let i = 0; i < poll.choices.length; i++) {
			if (answerChoices[i].isSelected) {
				poll.choices.votes++;
			}
			delete answerChoices[i].isSelected;
		}
		// TODO 
		startEditPoll(poll.id, poll)(() => {
			location.reload();
		});
	}

	render() {
		debugger
		const poll = this.props.poll;

		const choiceButtons = this.answerChoices.map((choice) => (
			<div>
				<input
					type="button"
					value={choice.text}
					className={
						choice.isSelected ? "click-state" : "base-state"
					}
					onClick={e => this.handleChoiceClick(e)}
				/>
			</div>
		));

		return (
			<form onSubmit={this.handleSubmit}>
				<h1>{poll.title}</h1>
				<p>{poll.description}</p>
				{choiceButtons}
				<label>Note: You cannot modify your choice after you submit.</label>
				<input type="submit" value="Submit"/>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	const poll = getPoll(state.poll);
	return {
	poll
	};
};

const mapDispatchToProps = (dispatch, route) => {
	const pollId = route.location.pathname.match(/\/polls\/(.*)\/answer\/?/)[1];
	return dispatch(startGetPoll({
		id: pollId,
		edit: true
	}));
};

export default (AnswerPollForm);
