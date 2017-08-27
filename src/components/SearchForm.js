import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

import Skills from '../constants/Skills';

class SearchForm extends Component {
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
