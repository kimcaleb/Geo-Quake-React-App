import React, { Component } from "react";
import axios from "axios";
import "milligram";


export default class ListComponent extends Component {
    state = {
        results: []
    }

    getLastWeek = () => {
        var today = new Date();
        var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
        var lastWeekMonth = lastWeek.getMonth() + 1;
        var lastWeekDay = lastWeek.getDate();
        var lastWeekYear = lastWeek.getFullYear();
        var lastWeekDisplay = lastWeekYear + "/" + lastWeekMonth + "/" + lastWeekDay;
        return lastWeekDisplay;
    }
    getCurrentWeek = () => {
        var today = new Date();
        var WeekMonth = today.getMonth() + 1;
        var WeekDay = today.getDate();
        var WeekYear = today.getFullYear();
        var WeekDisplay = WeekYear + "/" + WeekMonth + "/" + WeekDay;
        return WeekDisplay;
    }
    callQuakesApi = () => {

        axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${this.getLastWeek()}&endtime=${this.getCurrentWeek()}&limit=15`).then( ({data}) => {
            this.setState({results:data.features});
        })
    }

    render() {
        return (
            <div id="info">
                {this.callQuakesApi()}
                {this.state.results.map( (incident, index) => {
                    return(<p key={index}>{incident.properties.title} </p>);
                })}
            </div>
        );
    }    

}