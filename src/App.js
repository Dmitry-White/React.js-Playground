import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: "John",
  };

  changeUsername = () => {
    console.log("Clicked")
    this.setState({
      username: "Michael"
    });
  }

  render() {
    return (
      <div className="App"onClick={this.changeUsername}>
        <UserInput />
        <UserOutput name={this.state.username} />
        <UserOutput name="Jane" />
        <UserOutput name="Jessie" />
      </div>
    );
  };
}

export default App;
