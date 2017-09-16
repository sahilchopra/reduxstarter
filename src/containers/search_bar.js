import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  formSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.formSubmit}>
        <input 
          className="form-control"
          placeholder="Seach here"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispach) {
  return bindActionCreators({ fetchWeather }, dispach);
}

export default connect(null, mapDispatchToProps)(SearchBar);