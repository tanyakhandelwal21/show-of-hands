import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { NavLink } from 'react-router-dom'

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1 className="logo--header">Show Of Hands</h1>
        </Link>
        
        <button onClick={function(e){
          e.onClick=window.location.href='/dashboard'
        }}>
          Create a Poll
        </button>
        <button className="button--logout button button--link" onClick={startLogout}>Logout</button>

      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);

