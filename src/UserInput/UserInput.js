import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <form className="UserInput">
            <label>Username: </label>
            <input onChange={props.change} value={props.name} type="text"/>
        </form>
    )
};

export default userInput;
