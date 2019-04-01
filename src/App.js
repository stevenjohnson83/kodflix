import React, { Component } from 'react';
import theMachinist from './images/theMachinist.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
<img src={theMachinist} />
      </div>
    );
  }
}

export default App;
