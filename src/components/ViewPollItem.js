import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import PollListItem from './PollListItem';
import getPoll from '../selectors/get-poll';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ViewPollItem = ({ poll }) => {
    if (!poll || !poll.id) { return null; }
    const {
        id, numberOfOptions, createdAt, description
    } = poll;

    return (
        <div>
            <PollListItem data={poll} />;
            {
                poll && poll.editable ? <Link to={`/dashboard/polls/${id}/edit`}>
                    <button>
                        Edit
                    </button>
                </Link> : null
            }
            <Link to={`/dashboard/polls/${id}/answer`}>
                <button>
                    Answer
                </button>
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    const poll = getPoll(state.poll);
    return { poll };
};

export default connect(mapStateToProps)(ViewPollItem);
