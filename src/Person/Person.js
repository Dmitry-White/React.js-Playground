import React from 'react';
import './Person.css';

const person = (props) => {
    const name = props.name;
    const age = props.age;
    const children = props.children;
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {name}  and I am {age} years old!</p>
            <p>{children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
