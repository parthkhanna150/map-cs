import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

import Skills from '../constants/Skills';
import { getRepositories, getLocation, getLanguages } from '../services/Github';

class SearchForm extends Component {

  state = { submittedLocation: '', submittedSkills: [], submittedGithub_user: '' };

  handleChange = (e, { name, value }) => {
    console.log(name + " " + value);
    this.setState({ [name]: value });
  };

  handleSubmit = () => {


    // const { submittedLocation, submittedSkills, submittedGithub_user } = this.state;
    // this.setState({ submittedLocation, submittedSkills, submittedGithub_user });

    getRepositories(this.state.submittedGithub_user).catch(error => console.log(error));
    getLocation(this.state.submittedGithub_user).catch(error => console.log(error));
    getLanguages(this.state.submittedGithub_user).catch(error => console.log(error));
    this.state.submittedGithub_user=null;
  };

  render() {
    const skillsOptions = Skills;
    const { onAddItem } = this.props;
    const { onChange } = this.props;
    const { onSubmit } = this.props;

    return (
      <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group widths={'equal'}>
          <Form.Input
            name={'submittedLocation'}
            onChange={onChange}
            placeholder={'Location'}
          />
          <Form.Dropdown
            allowAdditions
            fluid
            multiple
            name={'submittedSkills'}
            options={skillsOptions}
            onAddItem={onAddItem}
            onChange={onChange}
            placeholder={'Skills'}
            search
            selection
          />
          <Form.Input
            name={'submittedGithubUsername'}
            onChange={onChange}
            placeholder={'GitHub Username'}
          />
          <Form.Button fluid>
            Search
          </Form.Button>
        </Form.Group>
      </Form>
    </Container>
    );
  }
}

export default SearchForm;
