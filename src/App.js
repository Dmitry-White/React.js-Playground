import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';
import Validation from './Validation/Validation';
import Chars from './Chars/Chars';

class App extends Component {
  state = {
    inputText : "",
    chars : [],
  };

  inputChangeHandler = (event) => {
    let newInput = event.target.value;
    let newChars = newInput.split("").map(char => {
      return {
        id: uuid(),
        char: char,
      }
    });
    this.setState({
      inputText : newInput,
      chars : newChars
    });
  };

  charClickHandler = (index) => {
    const newChars = [...this.state.chars];
    newChars.splice(index,1);

    const newInput = newChars.map(newChar => {
      return newChar.char;
    }).join("");
    
    this.setState({
      inputText : newInput,
      chars : newChars
    });
  };

  render() {
    const style = {
      width: "60%",
      margin: "16px auto",
      padding: "5px",
      textAlign: "center",
    } 
    return (
      <div style={style}>
        <input 
          type="text" 
          onChange={this.inputChangeHandler} 
          value={this.state.inputText}
        />
        <p style={{fontWeight:"bold"}}>{this.state.inputText.length}</p>
        <Validation inputLength={this.state.inputText.length} />
        <Chars chars={this.state.chars} clicked={this.charClickHandler} />
      </div>
    );
  }
  
};

export default App;
