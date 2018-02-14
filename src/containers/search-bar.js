import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        //avoid props of null error, bind this
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();

        //mapDipatchToProps gives us access to fetchWeather via props
        this.props.fetchWeather(this.state.term);
        //clear search bar after search
        this.setState({ term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Type a city (e.g. Boston)"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Search</button>
                </span>
            </form>
        );
    }
}

//dispatch makes sure action creator fetchWeather flows to middleware than reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null as first argument because we don't care about state here
export default connect(null, mapDispatchToProps)(SearchBar);