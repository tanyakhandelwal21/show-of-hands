import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';
import PollListFilters from './PollListFilters';
import PollsSummary from './PollsSummary';
import { listAllPolls } from '../actions/polls';

class DashboardPage extends React.Component {

	constructor (props) {
		super(props);
		this.state = { filters: {} }
		this.rerenderList = this.rerenderList.bind(this)
	}

	rerenderList (filters) {
		/*setState({
			filters
		})*/
		//this.props.refresh()
	}

	render () {
		return <div>
			<PollsSummary />
			<PollListFilters onChange={this.rerenderList} />
			<PollList filters={this.state.filters} />
		</div>
	}
}
 

const mapDispatchToProps = (dispatch) => {
	dispatch(listAllPolls())
	return {
		refresh: () => dispatch(listAllPolls())
	}
};

export default connect(undefined, mapDispatchToProps)(DashboardPage);
