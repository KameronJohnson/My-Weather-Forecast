import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};

        // this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.value);
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Get a weather forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-default">Search</button>
                </span>
            </form>
        );
    }
}

