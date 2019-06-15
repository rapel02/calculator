import React from 'react';
import Calculator from './components/Calculator/Calculator';
import './App.css';

class App extends React.Component {
  state = {
  }
  render() {
    return (
      <div className = "App">
      <Calculator/>
      </div>
    )
  }
}

export default App;
