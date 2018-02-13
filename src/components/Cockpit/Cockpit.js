import React from 'react'

import classes from './Cockpit.css';

const cockpit = props => {
    let btnClass = classes.Button;
    let assignedClasses = [];

    if (props.showPersons) btnClass = [classes.Button,classes.Red].join(" ");

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    };
    if (props.persons.length <=1) {
      assignedClasses.push(classes.italic);
    };

    return <>
        <h1 className={assignedClasses.join(" ")}>Hi, I'm a React App! </h1>
        <button
            className={btnClass}
            onClick={props.clicked}
        >Toggle Persons</button>
    </>;
}

export default cockpit;