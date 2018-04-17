import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    // bind this function to this which is SearchBar
    // Replace onInputChange with this new bound . . .we are overridding
    // We need to bind our context
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSumbit = this.onFormSumbit.bind(this);
  }

  onInputChange(event) {
    // Look at event object
    // console.log(event.target.value);
    //this.setState({ term: event.target.value }); I don't have
    // the method set setState
    this.setState({ term: event.target.value });
  }

  // This is a callback
  onFormSumbit(event) {
    // Want to prevent it from submitting to backend
    event.preventDefault();

    // We need to get fetch the weather data now
    // We are going to call action creator here
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSumbit} className="input-group">
        <input
          placeholder="Get a five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
