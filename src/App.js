import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/'>
            <HomePage />
          </Route>
        </div>
      </BrowserRouter >
    )
  }
}

export default App;
