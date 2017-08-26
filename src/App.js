import React, { Component } from 'react';
import './App.css';

import { getURL } from './services/Github';

class App extends Component {
  componentDidMount() {
    console.log(getURL('elailai94'));
  };
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
            Welcome to map
        </div>
      </div>
    );
  }
}

export default App;
