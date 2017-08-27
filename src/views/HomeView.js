import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';

class HomeView extends Component {
  render() {
    return (
      <SearchForm />
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
