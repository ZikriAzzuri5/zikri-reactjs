/* eslint-disable react/prop-types */
import React from "react";

export default class ClassComponent extends React.Component {
  render(){
    return(
      <div>
        <h1>Tugas membuat Class Component {this.props.name}</h1>
      </div>
    )
  }
}
