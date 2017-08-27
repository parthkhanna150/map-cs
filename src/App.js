import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
// import { getURL } from './services/Github';

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
      <Segment
        inverted
        vertical
        color={'blue'}
      >
        <NavigationBar />
        <SearchForm />
      </Segment>
    );
  }
}

export default App;
