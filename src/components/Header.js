import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { NavLink } from 'react-router-dom'

export const Header = ({ startLogout }) => (
	<header className="header">
	<div className="content-container">
		<div className="header__content">
		<Link className="header__title" to="/welcome">
			<h1>Show Of Hands</h1>
		</Link>
		<span>     </span> 
		<div className="navbar">
	<ul>
  <li><a href="/add-poll">Create a poll</a></li>
  <li><a href="/polls">View polls</a></li>
  <li><a href="/dashboard">User Dashboard</a></li>

  <li> <a onClick={startLogout}>Logout</a></li>
</ul>
	</div>
	</div>
	</div>
	</header>
);

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);
