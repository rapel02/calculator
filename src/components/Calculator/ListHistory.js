import React from 'react';
import History from './History';

class ListHistory extends React.Component {
  state = {
    is_clicked: 0
  }
  render() {
    return this.props.histories.map((history) =>(
      <History history= {history}/>
    ));
  }
}

export default ListHistory;