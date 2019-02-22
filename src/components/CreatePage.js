import React from 'react';
import { connect } from 'react-redux';
import CreateForm from './CreateForm.js';
import { startAddPoll } from '../actions/polls';

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
    }
    createPoll(poll) {
        this.props.startAddPoll(poll);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>Create a Poll</h1>
                <CreateForm onSubmit={poll => this.createPoll(poll)}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddPoll: (poll) => dispatch(startAddPoll(poll))
});

export default connect(undefined, mapDispatchToProps)(CreatePage);
