import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './WelcomePage.css'

const WelcomePage = (props) => (
	<div>
		<a classname = "view-polls-link" href="/dashboard/polls/">
	        <h1>View Polls</h1>
	    </a>   
	    <a href="/dashboard/add-poll/">
	        <h1>Add Poll</h1>
	    </a>    
	</div>
)
 


export default connect()(WelcomePage);
