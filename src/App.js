import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id:'ldkn', name: "Mike", age: "28" },
      { id:'sdgd', name: "Jane", age: "29" },
      { id:'tewt', name: "Jessie", age: "26" },
    ],
    showPersons: false,
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person

    this.setState({ persons : persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons:!doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
            {this.state.persons.map((person,index) => {
              return (
                <ErrorBoundary key={person.id}>
                  <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    changed={(e) => this.nameChangeHandler(e,person.id)}
                  />
                </ErrorBoundary>
              )
            })}
          </div>
      );
      btnClass = classes.Red;
    };

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    };
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    };

    return (
        <div className={classes.App}>
          <h1 className={assignedClasses.join(" ")}>Hi, I'm a React App! </h1>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}
          >Toggle Persons</button>
          { persons }
        </div>
    );
  };
}

export default App;
