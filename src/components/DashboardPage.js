import React from 'react';
<<<<<<< HEAD
import './DashboardPage.css';


class DashboardPage extends React.Component {

  handleCreatePoll(e)
   {
     // redirect to the create form page
   }

   handleAnswerPoll(e)
   {
     // redirect to the answer poll page
   }

render() {
  return (
  <div>
        <button 
          className = "create-poll"
          onClick={(e) => this.handleCreatePoll(e)}>
          Create a new poll
          </button>
        <button 
          className = "answer-poll"
          onClick={(e) => this.handleAnswerPoll(e)}>
          Answer polls
          </button>
        
        <h1 className="trending-polls">Trending polls</h1>
  </div>
);
}
}


export default DashboardPage;

=======
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
>>>>>>> 49aac6f73a8cce1c6a9eb17a63fa906cc59991d8
