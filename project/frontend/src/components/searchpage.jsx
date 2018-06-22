import {React, Component} from 'react';

class SearchPage extends Component {
  render() {
    return (
      <div className="search-bar">
        <a className="active" href="#home">Home</a>
        <input type="text" placeholder="Search..">
        </div>
      );
    }
  }

  export default SearchPage;
