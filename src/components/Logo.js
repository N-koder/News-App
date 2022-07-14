import React, { Component } from 'react'
import icon from './icon.svg'
export class Logo extends Component {
  render() {
    return (
      <div><img src={icon} style = {{width: '60px', filter : 'invert(1)'}} alt="" /></div>
    )
  }
}

export default Logo