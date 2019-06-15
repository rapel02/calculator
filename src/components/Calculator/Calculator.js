import React from 'react';
import Display from './Display';
import Button from './Button';
import HistorySection from './HistorySection';

class Calculator extends React.Component {
  state = {
    equation: "0",
    history: []
  }

  addCharacter = (new_character) => {
    let equation = this.state.equation;
    if(this.state.equation === "0" && new_character >= '1' && new_character <= '9') equation = "";
    const new_equation = equation + new_character;
    this.setState({equation: new_equation, history: this.state.history});
  }

  deleteCharacter = () => {
    const length = this.state.equation.length;
    let new_equation = this.state.equation.slice(0, length - 1);
    if(new_equation.length === 0) new_equation = "0";
    this.setState({equation: new_equation, history: this.state.history});
  }

  evaluate = () => {
    const length = this.state.equation.length;
    let new_equation = "";
    for(let i = 0;i < length;i++) {
      if(this.state.equation[i] === 'X') new_equation += '*';
      else if(this.state.equation[i] === '%') new_equation += "/100";
      else new_equation += this.state.equation[i];
    }
    let res;
    let flag = 0;
    try {
      res = eval(new_equation);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Wrong Format");
        res = 0;
        flag = 1;
      }
    }
    if(flag === 0) {
      const new_history = {
        equation: this.state.equation,
        result: res.toString()
      }
      let curr_history = this.state.history;
      curr_history.unshift(new_history);
      if(curr_history.length > 5) curr_history.pop();
      this.setState({equation: res.toString(), history: curr_history});
      console.log(this.state.history);
    }
    else this.setState({equation: res.toString(), history: this.state.history});
  }

  cleanDisplay = () => {
    this.setState({equation: "0", history: this.state.history});
  }

  negate = () => {
    if(this.state.equation[0] === '-') {
      const length = this.state.equation.length;
      this.setState({equation: this.state.equation.slice(1, length), history: this.state.history});
    }
    else this.setState({equation: "-" + this.state.equation});
  }

  render() {
    return (
      <React.Fragment>
        <HistorySection histories = {this.state.history}/>
        <Display result = {this.state.equation} />
        <Button addCharacter = {this.addCharacter} deleteCharacter = {this.deleteCharacter} evaluate = {this.evaluate} cleanDisplay = {this.cleanDisplay} negate = {this.negate}/>
      </React.Fragment>
    )
  }
}

export default Calculator;