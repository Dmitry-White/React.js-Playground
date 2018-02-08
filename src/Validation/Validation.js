import React from 'react';
import './Validation.css';

const validation = (props) => {
    let validationResult = props.inputLength > 5
        ? <p>Text is long enough</p>
        : <p>Text is too short</p>
    return <div className="Validation">{validationResult}</div>
};

export default validation;