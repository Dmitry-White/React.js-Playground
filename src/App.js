import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Mike", age: "28" },
      { name: "Jane", age: "29" },
      { name: "Jessie", age: "26" },
    ],
    showPersons: false,
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

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mike", age: "28" },
        { name: event.target.value, age: "29" },
        { name: "Jessie", age: "26" },
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons:!doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
            <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
            />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Mike!')}
              changed={this.nameChangeHandler}
            >My Hobbies: Racing</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}
            />
          </div>
      );
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App! </h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        { persons }
      </div>
    );
  };
}

export default App;
