import React from 'react';
import { connect } from 'react-redux';
import PollForm from './PollForm';
import { startEditPoll, startRemovePoll } from '../actions/polls';

export class EditPollPage extends React.Component {
  constructor (props) {
    this.onSubmit = this.onSubmit.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onSubmit (poll) {
    this.props.startEditPoll(this.props.poll.id, poll);
    this.props.history.push('/');
  }
  onRemove () {
    this.props.startRemovePoll({ id: this.props.poll.id });
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Poll</h1>
          </div>
        </div>
        <div className="content-container">
          <PollForm
            expense={this.props.poll}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Poll</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  poll: state.polls.find((poll) => poll.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditPoll: (id, poll) => dispatch(startEditPoll(id, poll)),
  startRemovePoll: (data) => dispatch(startRemovePoll(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPollPage);
