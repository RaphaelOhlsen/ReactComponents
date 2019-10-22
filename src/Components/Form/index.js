import React, { Component } from 'react';



export default class Form extends Component {
  
  render() {
    console.log(this.props.teste)
    return (
      <div>
        <input type="text" onChange={this.props.teste} />
      </div>
    )
  }
}
