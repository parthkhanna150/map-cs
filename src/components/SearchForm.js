import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

import Skills from '../constants/Skills';
import { getRepos, getLocation, getLanguages } from '../services/Github';

class SearchForm extends Component {

  state = { submittedLocation: '', submittedSkills: [], submittedGithub_user: '' };

  handleChange = (e, { name, value }) => {
    console.log(name + " " + value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => {

    // const { submittedLocation, submittedSkills, submittedGithub_user } = this.state;
    // this.setState({ submittedLocation, submittedSkills, submittedGithub_user });

    getRepos(this.state.submittedGithub_user).catch(error => console.log(error));
    getLocation(this.state.submittedGithub_user).catch(error => console.log(error));
    getLanguages(this.state.submittedGithub_user).catch(error => console.log(error));
    this.state.submittedGithub_user=null;
  };

  render() {
    const skillsOptions = Skills;

    return (
      <Container>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths={'equal'}>
          <Form.Input name={'submittedLocation'} onChange={this.handleChange} placeholder={'Location'} />
          <Form.Dropdown
            allowAdditions
            fluid
            multiple
            name={'submittedSkills'}
            options={skillsOptions}
            onChange={this.handleChange}
            placeholder={'Skills'}
            search
            selection
          />
<<<<<<< HEAD
          <Form.Input name={'submittedGithub_user'} onChange={this.handleChange} placeholder={'GitHub User'} />
          <Form.Button fluid>Search</Form.Button>
=======
          <Form.Input name={'github user'} placeholder={'GitHub User'} />
          <Form.Button fluid>
            Search
          </Form.Button>
>>>>>>> 2044062ffa12cbc54787c00099525fda522db6cf
        </Form.Group>
      </Form>
    </Container>
    );
  }
}

export default SearchForm;
