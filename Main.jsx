import React, {Component} from 'react';

class App extends Component {
  render() {
    return (<div className="App">
      <h2>Tag-It</h2>
      <div className="topmenu">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#tools">Tools</a>
      </div>

      <div className="tag-menu">
        <a href="#" className="active">Tags</a>
        <button className="tag-button">Click here to add Tag</button>
        <button className="tags">Tag 01</button>
        <button className="tags">Tag 02</button>
        <button className="tags">Tag 03</button>
        <button className="tags">Tag 04</button>
        <button className="tags">Tag 05</button>
      </div>
    </div>
    );
  }
}

export default App;
