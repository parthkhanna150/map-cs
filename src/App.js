import React, { Component } from 'react';

import { getRepos, getLocation, getLanguages } from './services/Github';
class App extends Component {
  // constructor() {
  //   super();
  //   users = ['elailai94', 'parthkhanna150'];
  // }

  componentDidMount() {
    getRepos('elailai94');
    getLocation('elailai94');
    getLanguages('elailai94');
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
