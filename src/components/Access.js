//Destructe class component props
import React, { Component } from 'react'

export default class Access extends Component {
    
  render() {
    const {Name,Age}=this.props
    return (
      <div>
        <h1>Hello {Name}, Age {Age}</h1>
      </div>
    )
  }
}

