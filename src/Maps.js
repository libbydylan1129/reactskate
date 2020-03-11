import React, {Component} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component{
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />
    );
  }
}

const mapStyles = {
  width: '60%',
  height: '60%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCwnvAJmYY-W_PvRunD0LkpfhFw0C3b0wM'
})(MapContainer);
