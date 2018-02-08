import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Chars from './Chars/Chars';

class App extends Component {

  render() {
    return (
      <div>
        <input />
        <Validation />
        <Chars />
      </div>
    );
  }
  
};

export default App;
