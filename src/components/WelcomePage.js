import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WelcomePage = (props) => (
	<div>
		<Link to="/dashboard/polls/">
	        <h1>View Polls</h1>
	    </Link>   
	    <Link to="/dashboard/add-poll/">
	        <h1>Add Poll</h1>
	    </Link>    
	</div>
)
 


export default connect()(WelcomePage);
