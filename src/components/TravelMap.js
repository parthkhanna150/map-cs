import React, { Component } from 'react';
import {
  Container,
  Segment,
} from 'semantic-ui-react';
import {
  Map,
  Marker,
  GoogleApiWrapper,
} from 'google-maps-react';
import PropTypes from 'prop-types';

import Settings from '../constants/Settings';

class TravelMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    alert(['C++', 'JavaScript', 'Python']);
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    const { google } = this.props;
    const { locations } = this.props;

    return (
      <Segment
        color={'blue'}
        inverted
        padded
        style={{minHeight: '75vh'}}
        textAlign={'center'}
        vertical
      >
        <Container>
          <Map
            google={google}
            initialCenter={{ lat: 0, lng: 0 }}
            style={styles.map}
            zoom={2}
          >
            {locations.map(location => {
              const { id } = location;
              const { name } = location;
              const { lat } = location;
              const { lng } = location;

              return (
                <Marker
                  key={id}
                  name={name}
                  onClick={this.onMarkerClick}
                  position={{lat: lat, lng: lng}}
                />
             );
            })}
          </Map>
        </Container>
      </Segment>
    );
  }
}

TravelMap.propTypes = {
  locations: PropTypes.array.isRequired,
};

const styles = {
  map: {
    height: '100%',
    width: '85%',
  },
};

const apiKey = Settings.google.API_KEY;
const TravelMapWrapper = GoogleApiWrapper({ apiKey })(TravelMap);
export default TravelMapWrapper;
