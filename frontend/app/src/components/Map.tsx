import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

import secrets from '../secrets.json';
import './map.css';

interface IMapState {
  apiKey: string;
}

export class Map extends Component<{}, IMapState> {
  componentWillMount() {
    this.setState({ apiKey: secrets['MAPS_API_KEY'] });
  }

  render() {
    return (
      <LoadScript id="script-loader" googleMapsApiKey={this.state.apiKey}>
        <GoogleMap id="map" center={{ lat: -25.344, lng: 131.036 }} />
      </LoadScript>
    );
  }
}
