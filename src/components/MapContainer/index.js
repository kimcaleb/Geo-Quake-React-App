import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from "google-maps-react";

export class MapContainer extends Component {
    render() {
        return(
            <Map google={this.props.google}
            zoom={1.4}
            initialCenter={
                {lat:37.38, lng: -122.44}
            }
            style={{width:"38%", height:"100%"}}
            zoom={11}
            >
            </Map>
        );
    }

}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
})(MapContainer)