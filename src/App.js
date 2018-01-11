import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "John",
  };

  changeUsername = (event) => {
    console.log("Change")
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1 style={{fontStyle: "italic"}}>Assignment 1</h1>
        <UserInput 
          name={this.state.username}
          change={this.changeUsername} 
        />
        <UserOutput name={this.state.username} />
        <UserOutput name={this.state.username} />
      </div>
    );
  };
}

export default App;
