import React from 'react';

class Button extends React.Component {
  onClick = (e) => {
    e.preventDefault();
    if(e.target.value === '<' ) this.props.deleteCharacter();
    else if(e.target.value === 'C') this.props.cleanDisplay();
    else if(e.target.value === '+/-') this.props.negate();
    else if(e.target.value === '=') this.props.evaluate();
    else this.props.addCharacter(e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <button style = {buttonStyle} value="C" onClick = {this.onClick}>C</button>
        <button style = {buttonStyle} value="+/-" onClick = {this.onClick}>+/-</button>
        <button style = {buttonStyle} value="%" onClick = {this.onClick}>%</button>
        <button style = {buttonStyle} value="<" onClick = {this.onClick}>DEL</button>
        <br/>
        <button style = {buttonStyle} value="7" onClick = {this.onClick}>7</button>
        <button style = {buttonStyle} value="8" onClick = {this.onClick}>8</button>
        <button style = {buttonStyle} value="9" onClick = {this.onClick}>9</button>
        <button style = {buttonStyle} value="/" onClick = {this.onClick}>/</button>
        <br/>
        <button style = {buttonStyle} value="4" onClick = {this.onClick}>4</button>
        <button style = {buttonStyle} value="5" onClick = {this.onClick}>5</button>
        <button style = {buttonStyle} value="6" onClick = {this.onClick}>6</button>
        <button style = {buttonStyle} value="X" onClick = {this.onClick}>X</button>
        <br/>
        <button style = {buttonStyle} value="1" onClick = {this.onClick}>1</button>
        <button style = {buttonStyle} value="2" onClick = {this.onClick}>2</button>
        <button style = {buttonStyle} value="3" onClick = {this.onClick}>3</button>
        <button style = {buttonStyle} value="-" onClick = {this.onClick}>-</button>
        <br/>
        <button style = {buttonStyle} value="0" onClick = {this.onClick}>0</button>
        <button style = {buttonStyle} value="." onClick = {this.onClick}>.</button>
        <button style = {buttonStyle} value="+" onClick = {this.onClick}>+</button>
        <button style = {buttonStyle} value="=" onClick = {this.onClick}>=</button>
        <br/>
      </React.Fragment>
    )
  }
}

const buttonStyle = {
  textAlign: "center", 
  width: "25%",
  height: "8rem",
  fontSize: "3rem",
  backgroundColor: "#f5f5f5",
  color: "#303030",
  fontFamily: "open sans"
}

export default Button;