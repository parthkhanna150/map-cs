import React, { Component } from 'react';
import { Container, Form} from 'semantic-ui-react';

import Skills from '../constants/Skills';

class SearchForm extends Component {
  render() {
    const skillsOptions = Skills;

    return (
      <Container>
      <Form>
        <Form.Group widths={'equal'}>
          <Form.Input name={'location'} placeholder={'Location'} />
          <Form.Dropdown
            fluid
            multiple
            name={'skills'}
            options={skillsOptions}
            placeholder={'Skills'}
            search
            selection
          />
          <Form.Input name={'github user'} placeholder={'GitHub User'} />
          <Form.Button fluid>Search</Form.Button>
        </Form.Group>
      </Form>
    </Container>
    );
  }
}

export default SearchForm;
