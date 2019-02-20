import React from 'react';
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

