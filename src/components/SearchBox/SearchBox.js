import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    const { value } = this.state;
    return (
      <input
        className="input"
        type="text"
        placeholder="search"
        value={value}
        onChange={this.handleInputChange}
      />
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.props.handleInputChange(value);

    this.setState({ value });
  }
}

export default SearchBox;