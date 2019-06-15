import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1 style = {headerStyle}>Calculator</h1>
    )
  }
}

const headerStyle = {
  backgroundColor: "#383f43",
  color: "#fafafa",
  margin: "0 0 0 0",
  textAlign: "center"
}

export default Header;