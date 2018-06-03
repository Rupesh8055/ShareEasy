import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import viewer from './viewer.js'
import uploader from './uploader.js'

class App extends Component {

  componentDidMount() {
    document.getElementById('videocontent').style.display = "none";
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <strong>AngelHack</strong>
          </h1>
        </header>
        <div id="box">
        <p className="App-intro">
          You Want to use me as a 
        </p>
        <button onClick={viewer}>Presenter</button>
        <button onClick={uploader}>Controller</button>
        
        </div>
      </div>
    );
  }
}

export default App;
