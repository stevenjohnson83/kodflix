import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Gallery from './Gallery.js'
import Details from './Details.js'
import notFound from './notFound.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Gallery} />
            <Route exact path='/not-found' component={notFound} />
            <Route exact path='/:movieTitle' component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}




export default App;
