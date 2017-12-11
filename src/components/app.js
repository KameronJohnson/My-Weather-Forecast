import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
    render() {
        return (
            <div>
                <h3 className="title">My Weather Forecast
                    <small className="text-muted">  (Five Day Average for US Cities)</small>
                </h3>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}