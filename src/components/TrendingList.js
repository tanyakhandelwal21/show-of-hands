import React from 'react';
import { connect } from 'react-redux';
import PollListItem from './PollListItem';
import { listAllPolls } from '../actions/polls';
import selectPolls from '../selectors/polls';
import firebase from 'firebase/app'

class TrendingList extends React.Component {
    constructor(props) {
        super(props);
    }

    sortByTrending(polls) {
        // Assign each poll a "hotness" factor
        for (let i = 0; i < polls.length; i++) {
            let hotness = 0;
            // Set hotness to zero if poll has expired
            if (new Date() > polls[i].end_date) {
                polls[i].hotness = hotness;
                continue;
            }

            let time_active = ((new Date()).getTime() - polls[i].start_date)/1000;
            let total_votes = 0.0;
            for (let j = 0; j < polls[i].choices.length; j++) {
                total_votes += polls[i].choices[j].votes;
            }
            hotness = total_votes / time_active;
            if (polls[i].description.length > 40) hotness *= 1.1;
            if (!polls[i].public_results) hotness *= 0.8;

            polls[i].hotness = hotness;

            console.log(polls[i].title, hotness);
        }

        // Sort polls by their hotness factors (in place with their titles)
        let result = polls.slice();
        result.sort((a, b) => {
            return a.title.toLowerCase() >= b.title.toLowerCase();
        })
        result.sort((a, b) => {
            return b.hotness - a.hotness;
        })
        return result;
    }

	render () {
        const polls = this.props.polls;
		if (!polls || !polls.length) {
			return <p>No polls</p>;
		}

        // Get first 4 trending polls
		const trendingPolls = this.sortByTrending(polls).slice(0, 4);
		const trendingPollItems = trendingPolls.map((poll) => {
			return <PollListItem uid={this.props.uid} key={poll.id} data={poll} />;
		})

		return <div>
			{trendingPollItems}
		</div>
	}
}

const mapStateToProps = (state) => {
  const polls = selectPolls(state.polls, state.filters)
  return {
    polls,
    uid: state.auth.uid
  };
};

export default connect(mapStateToProps)(TrendingList);
