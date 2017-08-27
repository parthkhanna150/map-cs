import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import siteLogo from './static/images/site-logo.png';
import NavigationBar from './components/NavigationBar';
import SearchForm from './components/SearchForm';
import TravelMap from './components/TravelMap';
import { setSubmittedGithubUsername } from './actions/SubmittedGithubUsernameActions';
import { getUserLanguages } from './actions/UserLanguagesActions';
import { getUserLocation } from './actions/UserLocationActions';
import { getUserRepositories } from './actions/UserRepositoriesActions';

class App extends Component {
  componentDidMount() {
    document.title = 'SkillMap';
  }

  render() {
    const { submittedGithubUsername } = this.props;
    console.log(submittedGithubUsername);
    const { getUserLanguages } = this.props;
    const { getUserLocation } = this.props;
    const { getUserRepositories } = this.props;
    const { userLocation } = this.props;
    const locations = (userLocation.response.id !== '')?
      [ userLocation.response ] : [];

    return (
      <Segment
        color={'blue'}
        inverted
        style={styles.segment}
        textAlign={'center'}
        vertical
      >
        <NavigationBar siteLogo={siteLogo} />
        <SearchForm
          //onAddItem={(event, {})}
          //onChange={(githubUsername) => {
          //  setSubmittedGithubUsername(githubUsername);
          //}}
          onSubmit={() => {
            getUserLanguages('elailai94');
            getUserLocation('elailai94');
            getUserRepositories('elailai94');
          }}
        />
        <TravelMap locations={locations}/>
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
    userLocation: state.userLocation,
    submittedGithubUsername: state.submittedGithubUsername,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSubmittedGithubUsername: (githubUsername) => dispatch(setSubmittedGithubUsername(githubUsername)),
    getUserLanguages: (username) => dispatch(getUserLanguages(username)),
    getUserLocation: (username) => dispatch(getUserLocation(username)),
    getUserRepositories: (username) => dispatch(getUserRepositories(username)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
