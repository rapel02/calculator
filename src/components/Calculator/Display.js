import React from 'react';

class Display extends React.Component {
  render() {
    return (
      <div style = {displayStyle}>
      {this.props.result}
      </div>
    )
  }
}

const displayStyle = {
  backgroundColor: "#4e4e4e",
  color: "#fafafa",
  textAlign: "right",
  fontSize: "4rem",
  fontWeight: "bolder",
  paddingRight: "1rem",
  height: "6rem"
}

export default Display;