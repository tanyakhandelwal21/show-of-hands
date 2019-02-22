import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { NavLink } from 'react-router-dom'

export const Header = ({ startLogout, addPoll }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Show Of Hands</h1>
        </Link>
        <NavLink to='dashboard/polls/add' activeclassName="is-active" exact={true}> Create my poll</NavLink>
        <button className="button button--link" onClick={startLogout}>Logout</button>
        
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
  
});


export default connect(undefined, mapDispatchToProps)(Header);

