import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
// import { getURL } from './services/Github';

class App extends Component {
  // constructor() {
  //   super();
  //   users = ['elailai94', 'parthkhanna150'];
  // }
/*
  componentDidMount() {
    getURL('elailai94').then(response => console.log(response)).catch(error => console.log(error));
  };
*/
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
