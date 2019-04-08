import React, { Component } from 'react';
import './App.css';
import ssr from './images/SSR.jpg';
import tgf from './images/TGF.jpg';
import tdk from './images/TDK.jpg';
import tgf2 from './images/TGF2.jpg';
import rotk from './images/ROTK.jpg';
import pf from './images/PF.jpg';


//Display them in 2 rows (3 covers per row).
//Titles will be set as big headings, aligned to the middle (horizontally), and with 30px margin each


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <br /><br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={ssr} alt='Shawshank redemption'/>
          </div>
          <div className='item'>
            <img src={tgf} alt='The Godfather'/>
          </div>
          <div className='item'>
            <img src={tdk} alt='the Dark Knight'/>
          </div>
        </div>

        <div className="container">
          <div className='item'>
            <img src={tgf2} alt='The Godfather Part 2'/>
          </div>
          < div className='item'>
            <img src={rotk} alt='Return Of The King'/>
          </div>
          <div className='item'>
            <img src={pf} alt='Pulp Fiction'/>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
