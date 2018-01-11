import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <input onChange={props.change} type="text"/>
        </div>
    )
};

export default userInput;
