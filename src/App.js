import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name="Mike" />
        <UserOutput name="Jane" />
        <UserOutput name="Jessie" />
      </div>
    );
  };
}

export default App;
