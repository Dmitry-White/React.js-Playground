import React, { Component } from 'react'
import classes from './Person.css';
import PropTypes from 'prop-types';

import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);
    };
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount');
    };
    
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if (this.props.pos === 1) {
            this.inputElement.focus();
        }
    };
    render() {
        console.log('[Person.js] Inside render');
        return <WithClass classes={classes.Person}>
            <p onClick={this.props.clicked}>
                I'm a {this.props.name}  and I am {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input 
                ref={inp => {this.inputElement = inp}}
                type="text"
                onChange={this.props.changed}
                value={this.props.name}
            />
        </WithClass>
    }
}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
