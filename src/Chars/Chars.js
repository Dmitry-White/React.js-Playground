import React from 'react';
import './Chars.css';

const chars = (props) => {

    let charBlocks = props.chars.map((char,index) => {
        return (
            <p 
                className="Chars"
                key={char.id}
                onClick={() => props.clicked(index)}
            >{char.char}</p>
        )
    })

    return (
        <div>{ charBlocks }</div>
    )
};

export default chars;