import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';
import PollListFilters from './PollListFilters';
import PollsSummary from './PollsSummary';
import { listAllPolls } from '../actions/polls';

const DashboardPage = (props) => (
	<div>
	<PollsSummary />
	<PollListFilters />
	<PollList />
	</div>
)


const mapDispatchToProps = (dispatch) => {
	return dispatch(listAllPolls())
};

export default connect(undefined, mapDispatchToProps)(DashboardPage);
