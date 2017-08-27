import React, { Component } from 'react';

import { getURL } from './services/Github';
class App extends Component {
  // constructor() {
  //   super();
  //   users = ['elailai94', 'parthkhanna150'];
  // }

  componentDidMount() {
    getURL('elailai94').then(response => console.log(response)).catch(error => console.log(error));
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
