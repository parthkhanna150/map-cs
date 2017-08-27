import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

import Skills from '../constants/Skills';

class SearchForm extends Component {

  handleInput(event, { name, value }) {
    const n_america = ['JavaScript', 'Python', 'Swift', 'Java'];
const s_america = ['C', 'JavaScript', 'Python', 'Java'];
const asia = ['Java', 'C++', 'C', 'Python'];
const australia = ['Java', 'C', 'Python', 'C++'];

    switch (value) {
      case 'america':
        alert(n_america);
        break;

      case 'canada':
      alert(n_america);
      break;

      case 'china':
      alert(n_america);
      break;

      case 'japan':
      alert(asia);
      break;

      case 'nigeria':
      alert(australia);
      break;

      case 'south africa':
      alert(s_america);
      break;

      default:

    }
  }

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
            onChange={this.handleInput}
            name={'submittedLocation'}
            placeholder={'Location'}
          />
          <Form.Dropdown
            allowAdditions
            fluid
            multiple
            name={'submittedSkills'}
            options={skillsOptions}
            onAddItem={onAddItem}
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
