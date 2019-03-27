import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TrendingList from './TrendingList';
import { listAllPolls } from '../actions/polls';

const WelcomePage = (props) => (
	<div>
	<div>
		<a href="/polls/">View Polls</a>
		<a href="/add-poll/">Add Poll</a>
	</div>
	<div>
		<h1>Trending Polls</h1>
		<TrendingList />
	</div>
	</div>
)


const mapDispatchToProps = (dispatch) => {
	dispatch(listAllPolls())
	return {
	refresh: () => dispatch(listAllPolls())
	}
};

export default connect(undefined, mapDispatchToProps)(WelcomePage);
