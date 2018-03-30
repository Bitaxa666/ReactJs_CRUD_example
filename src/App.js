import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import Main from './routes';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div className="App-intro">
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/player">Player</Link>
                  </li>
                  <li>
                      <Link to="/songs">Songs</Link>
                  </li>
              </ul>
          </div>
          <Main />
      </div>
    );
  }
}

export default App;
