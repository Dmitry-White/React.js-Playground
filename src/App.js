import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Mike", age: "28" },
      { name: "Jane", age: "29" },
      { name: "Jessie", age: "26" },
    ]
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "28" },
        { name: "John", age: "29" },
        { name: "Jessie", age: "26" },
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App! </h1>
        <button onClick={() => this.switchNameHandler('Michael')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Mike!')}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  };
}

export default App;
