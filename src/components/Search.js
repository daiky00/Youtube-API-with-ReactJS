import React, { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''}
  }

  render() {
    return (
      <div className="search">
        <input type="text"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} placeholder="Search videos here"/>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
export default Search;