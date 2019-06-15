import React from 'react'

class History extends React.Component {
  historyStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '1rem',
      borderBottom: '1px #ccc dotted',
      fontSize: "2rem",
      fontWeight: "bolder",
    }
  }


  render() {
    const {equation, result} = this.props.history;
    return (
      <div style={this.historyStyle()}>
        {equation} = {result}
      </div>
    );
  }
}

export default History;