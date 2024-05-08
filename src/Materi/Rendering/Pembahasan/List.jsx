import React from "react";

export default class List extends React.Component {
  state = {
    users: ['zikri', 'azzuri', 'munggaran']
  }
  render() {
    return(
      <ul>
      {this.state.users.map((user, i) => <li key={i}>{user}</li>)}
      </ul>
    )
  }
}