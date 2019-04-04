import React, { Component } from 'react';
//import theMachinist from './images/theMachinist.jpg';
import './App.css';

//Display them in 2 rows (3 covers per row).
//Titles will be set as big headings, aligned to the middle (horizontally), and with 30px margin each


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<img src={theMachinist} alt="The Machist cover"/>*/}
        <br /><br /><br /><br />

        <div className="Container">
          <div><h1>The Shawshank Redeption</h1></div>
          <div><h1>The Godfather</h1></div>
          <div><h1>The Dark Knight</h1></div>

        </div>
        <div className="Container">
          <div><h1>The Godfather Part 2</h1></div>
          <div><h1>Return Of The King</h1></div>
          <div><h1>Pulp Fiction</h1></div>
        </div>
      </div>

    );
  }
}

export default App;
