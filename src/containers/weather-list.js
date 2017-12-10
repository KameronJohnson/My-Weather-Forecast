
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name || '';
        const temps = cityData.list.map(weather => weather.main.temp)

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map weather array */}
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     const weather = state.weather
//     // state.weather as defined in our reducer
//     return { weather: state.weather }
// }

//es6 way
function mapStateToProps({ weather }) {
    return { weather };
}
//gives us access to this.props.weather inside WeatherList

export default connect(mapStateToProps)(WeatherList);