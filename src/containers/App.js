import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  };

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  };

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextState.persons !== this.state.persons
  //   || nextState.showPersons !== this.state.showPersons;
  // };

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  };

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  };

  state = {
    persons: [
      { id:'ldkn', name: "Mike", age: "28" },
      { id:'sdgd', name: "Jane", age: "29" },
      { id:'tewt', name: "Jessie", age: "26" },
    ],
    showPersons: false,
  };

  deletePersonHandler = personIndex => {
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
    console.log('[App.js] Inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
      />            
    };

    return (
        <div className={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            showPersons={this.state.showPersons}
          />
          { persons }
        </div>
    );
  };
}

export default App;
