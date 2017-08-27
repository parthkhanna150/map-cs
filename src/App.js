import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import siteLogo from './static/images/site-logo.png';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
import TravelMap from './components/TravelMap';
import { getUserLanguages } from './actions/UserLanguagesActions';
import { getUserLocation } from './actions/UserLocationActions';
import { getUserRepositories } from './actions/UserRepositoriesActions';

class App extends Component {
  componentWillMount() {
    const { getUserLanguages } = this.props;
    const { getUserLocation } = this.props;
    const { getUserRepositories } = this.props;

    getUserLanguages('elailai94');
    getUserLocation('elailai94');
    getUserRepositories('elailai94');
  }

  componentDidMount() {
    document.title = 'SkillMap';
  }

  render() {
    return (
      <Segment
        color={'blue'}
        inverted
        style={styles.segment}
        textAlign={'center'}
        vertical
      >
        <NavigationBar siteLogo={siteLogo} />
        <SearchForm />
        <TravelMap locations={[{id: 1, name: 'stuff', lat: 37.778519, lng: -122.405640}]}/>
      </Segment>
    );
  }
}

const styles = {
  segment: {
    minHeight: '100vh',
  },
};

function mapStateToProps(state) {
  return {
    status: state.userLocation.status,
    response: state.userLocation.response,
    error: state.userLocation.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserLanguages: (username) => dispatch(getUserLanguages(username)),
    getUserLocation: (username) => dispatch(getUserLocation(username)),
    getUserRepositories: (username) => dispatch(getUserRepositories(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
