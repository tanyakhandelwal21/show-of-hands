import React from 'react';
import { connect } from 'react-redux';
import PollForm from './CreateForm';
import { startAnswerPoll, startGetPoll } from '../actions/polls';
import getPoll from '../selectors/get-poll';

export class AnswerPollPage extends React.Component {
	constructor (props) {
		super(props);
		this.answerPoll = this.answerPoll.bind(this);
		this.handleAnswerChange = this.handleAnswerChange.bind(this);
	}

	answerPoll (poll) {
		const newVoteCount = ++this.props.poll.choices[this.state.selected_answer].votes;
		startAnswerPoll(this.props.poll.id, this.state.selected_answer, this.props.uid, newVoteCount)(() => {
			this.setState({
				poll_answered: true
			});
		});
	}

	handleAnswerChange (e) {
		this.setState({
			selected_answer: e.target.value
		});
	}

	render() {

		if (!this.props.poll || !this.props.poll.id) {
			return null;
		}

		if ((this.state && this.state.poll_answered) || Object(this.props.poll.responses)[this.props.uid]) {
			return (
				<div>
					<div className="page-header">
						<div className="content-container">
							<h1 className="page-header__title">Answer Poll</h1>
						</div>
					</div>
					<div className="content-container">
						<h3>{this.props.poll.title}</h3>
						<p>{this.props.poll.description}</p>
						<div className="answers">
							<p><strong>You have answered the poll.</strong></p>
							<a href={`/dashboard/polls/${this.props.poll.id}`}>
								View the poll
							</a>
						</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Answer Poll</h1>
					</div>
				</div>
				<div className="content-container">
					<h3>{this.props.poll.title}</h3>
					<p>{this.props.poll.description}</p>
					<div className="answers">
						{
							this.props.poll.choices.map((choice, index) => {
								return <div className="answer-radio" key={index}>
									<label>
										<input
											type="radio"
											name="answer"
											value={index}
											onChange={this.handleAnswerChange}
										/>
										{" "}
										<span>{choice.text}</span>
									</label>
								</div>
							})
						}
					</div><br/>
					<button className="button button--secondary" onClick={this.answerPoll}>Answer Poll</button>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	const poll = getPoll(state.poll);
	const uid = state.auth.uid;
	return { poll, uid };
};

const mapDispatchToProps = (dispatch, route) => {
	const pollId = route.location.pathname.match(/\/polls\/(.*)\/answer\/?/)[1];
	return dispatch(startGetPoll({
		id: pollId
	}));
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerPollPage);
