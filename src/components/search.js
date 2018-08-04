import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  // Always define render component
  render() {
    return (
      <div className = 'search-bar'>
        <input
          value = {this.state.term}
          onChange = {(event) => this.setState({term: event.target.value})} />
        <button onClick = {(event) => this.onSearch(this.state.term)}>
          Search
        </button>
      </div>
    );
  }

  onSearch(term){
    this.props.searchTerm(term);
  }
}
export default SearchBar;


// Event handler called with an event object
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
  // If you use this event handler, in those curly braces up there put this.onInputChange

// const SearchBar = () => {
//   return <input />;
// }
