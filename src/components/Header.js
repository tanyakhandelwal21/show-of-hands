import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
<<<<<<< HEAD
import './Header.css'
=======
import { NavLink } from 'react-router-dom'
>>>>>>> a183b940bf0ff1af393f100674387ae877888291

export const Header = ({ startLogout, addPoll }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1 className="header1">Show Of Hands</h1>
        </Link>
        <NavLink to='dashboard/polls/add' className="is-active" exact={true}>Create Poll</NavLink>
        <button className="button button--link" onClick={startLogout}>Logout</button>

      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())

});


export default connect(undefined, mapDispatchToProps)(Header);
