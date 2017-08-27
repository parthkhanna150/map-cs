import React, { Component } from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import SiteLogo from './SiteLogo';

class NavigationBar extends Component {
  render() {
    const { siteLogo } = this.props;

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
            <SiteLogo src={siteLogo} />
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

NavigationBar.propTypes = {
  siteLogo: PropTypes.string.isRequired,
};

const styles = {
  menu: {
    borderWidth: 0,
  },
};

export default NavigationBar;
