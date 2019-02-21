import React from 'react';
import { connect } from 'react-redux';
import PollForm from './PollForm';
import { startAddPoll } from '../actions/polls';

export class AddPollPage extends React.Component {
  onSubmit = (poll) => {
    this.props.startAddPoll(poll);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Poll</h1>
        <ExpenseForm
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
