import React from 'react';
import ListHistory from './ListHistory'

class HistorySection extends React.Component {
  state = {
    is_clicked: 1
  }
  onClick = (e) => {
    e.preventDefault();
    this.setState({is_clicked: 1 - this.state.is_clicked})
  }
  render() {
    return (
      <div style={listHistoryStyle}>
      <h1 style={{backgroundColor: "#64676c", paddingRight: "1rem", margin: 0, fontWeight: "200"}} onClick = {this.onClick}>History v</h1>
      {
        (this.state.is_clicked == 1) ? <ListHistory histories= {this.props.histories}/>:<React.Fragment/>
      }
      </div>
    )
  }
}

const listHistoryStyle = {
  textAlign: "right",
}

export default HistorySection;