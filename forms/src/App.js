import React, { Component } from 'react';
import './App.css';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2><a href="https://reactjs.org/docs/forms.html" target="_blank" rel="noopener noreferrer">React: Forms</a></h2>
        <hr/>
        <div className="nameform">
          <NameForm />
        </div>
        <div className="essayform">
          <EssayForm />
        </div>
        <div className="flavorform">
          <FlavorForm />
        </div>
      </div>
    );
  }
}

export default App;
