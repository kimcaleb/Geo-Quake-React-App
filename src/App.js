import React, { Component } from "react";
import "milligram";
import ListComponent from "./components/ListComponent"
import MapComponent from "./components/MapContainer"


export default class App extends Component {


  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapComponent 
          style="width:40%;"
          />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          <ListComponent />
         
        </div>
      </div>
    );
  }
}
