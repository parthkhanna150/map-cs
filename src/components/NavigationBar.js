import React, { Component } from 'react';
import {
  Container,
  Header,
  Menu,
} from 'semantic-ui-react';

class NavigationBar extends Component {
  render() {
    return (
      <Container>
        <Menu
          inverted
          pointing
          secondary
          defaultActiveIndex={0}
          size={'large'}
          stackable
          style={styles.menu}
        >
          <Menu.Item header>
            <Header inverted size={'large'}>
              SkillMap
            </Header>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

const styles = {
  menu: {
    borderWidth: 0,
  },
};

export default NavigationBar;
