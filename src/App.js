import React, { Component } from 'react';
import theMachinist from './images/theMachinist.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<img src={theMachinist} alt="The Machist cover"/>

      </div>
    );
  }
}

export default App;
