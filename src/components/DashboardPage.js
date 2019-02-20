/*import React from 'react';
import './DashboardPage.css';
import logo from './logo copy.jpg';


class DashboardPage extends React.Component {
render() {
  return (
  <div>
        <img src={logo} alt="Logo" style={{ width:200, height:200 }} />
        <button id = "create-poll">Create a new poll</button>
        <span>       </span>
        <button id = "answer-poll">Answer polls</button>
        <h1>Trending polls</h1>
  </div>
);
}
}


export default DashboardPage;*/
import React, { Component } from 'react';
import logo from 'logocopy.jpg';
//import 'bootstrap/dist/css/bootstrap.css';
//import './App.css';
//import PropTypes from 'prop-types'
//import { relative } from 'upath';
//import { blue, bgWhite } from '../node_modules/ansi-colors';
//import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

class DashboardPage extends Component {
  render() {
  return ( 
    <div>
      <img src={logo} alt="Logo" style={{ width:200, height:200 }} /> 
      <h1>Show of Hands</h1>
      <button>Create Poll</button>
      <button>Answer Polls</button>
      <button>Logout</button>
    </div>
    );

   }
  }
  /*
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{this.props.name} </button>
        <h1> hi </h1>
      </div>
    );
  }
}
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,*/
//};
export default DashboardPage;

