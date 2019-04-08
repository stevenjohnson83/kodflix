import React, { Component } from 'react';
import './App.css';
import ssr from './images/SSR.jpg';
import tgf from './images/TGF.jpg';
import tdk from './images/TDK.jpg';
import tgf2 from './images/TGF2.jpg';
import rotk from './images/ROTK.jpg';
import pf from './images/PF.jpg';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <div className='container'>
          <div className='item'>
            <img src={ssr} alt='Shawshank redemption' />
            <div className='overlay'>
              <h2>The Shawshank Redemption</h2>
            </div>
          </div>

          <div className='item'>
            <img src={tgf} alt='The Godfather' />
            <div className='overlay'>
              <h2>The Godfather</h2>
            </div>
          </div>
          <div className='item'>
            <img src={tdk} alt='The Dark Knight' />
            <div className='overlay'>
              <h2>The Dark Knight</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className='item'>
            <img src={tgf2} alt='The Godfather Pt 2' />
            <div className='overlay'>
              <h2>The Godfather Pt 2</h2>
            </div>
          </div>
          < div className='item'>
            <img src={rotk} alt='Return Of The King' />
            <div className='overlay'>
              <h2>Return Of The King</h2>
            </div>
          </div>
          <div className='item'>
            <img src={pf} alt='Pulp Fiction' />
            <div className='overlay'>
              <h2>Pulp Fiction</h2>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default App;
