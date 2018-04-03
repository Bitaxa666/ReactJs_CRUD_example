import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Main from './routes';

import logo from './logo.svg';
import './App.css';


const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
    <Route path = {to} exact={activeOnlyWhenExact} children={({match}) =>(
        <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
    )} />
);


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="App-intro">
              <div className="ui container">
                  <div className="ui four item menu">
                       <ActiveLink activeOnlyWhenExact to="/" label="Home"></ActiveLink>
                       <ActiveLink activeOnlyWhenExact to="/player" label="Player"></ActiveLink>
                       <ActiveLink activeOnlyWhenExact to="/songs" label="Songs"></ActiveLink>
                       <ActiveLink activeOnlyWhenExact to="/songs/new" label="Add New Songs"></ActiveLink>
                  </div>
              </div>
          </div>
          <Main />
      </div>
    );
  }
}

export default App;
