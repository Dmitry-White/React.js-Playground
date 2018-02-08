import React from 'react';
import './Person.css';

import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    };
    const name = props.name;
    const age = props.age;
    const children = props.children;
    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {name}  and I am {age} years old!</p>
            <p>{children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);
