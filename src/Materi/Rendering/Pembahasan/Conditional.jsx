import React from "react";

export default class Conditional extends React.Component {
  state = {
    isLoading: true
  }
  render(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000);

    return(
      <div>
        {this.state.isLoading ? <h1>Loading...</h1> : <h1>anda sudah login</h1>}
      </div>
    )
  }
}