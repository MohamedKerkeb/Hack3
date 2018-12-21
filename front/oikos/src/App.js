import React, { Component } from 'react';
<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import Router from './routes/Router';

>>>>>>> b2147b5458adeb72e99f8759b98df02c09d8b1a2

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
=======
        <Router />
>>>>>>> b2147b5458adeb72e99f8759b98df02c09d8b1a2
      </div>
    );
  }
}

export default App;
