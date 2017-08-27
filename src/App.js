import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import siteLogo from './static/images/site-logo.png';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';

class App extends Component {
  componentDidMount() {
    document.title = 'SkillMap';
  }

  render() {
    return (
      <Segment
        color={'blue'}
        inverted
        textAlign={'center'}
        vertical
      >
        <NavigationBar siteLogo={siteLogo} />
        <SearchForm />
      </Segment>
    );
  }
}

export default App;
