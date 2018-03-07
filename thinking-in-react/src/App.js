import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
