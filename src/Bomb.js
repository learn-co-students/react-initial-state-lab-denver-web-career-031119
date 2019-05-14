// your Bomb code here!
import React, {Component} from 'react';
export default class Bomb extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  renderSeconds = () => {
    if (this.state.secondsLeft > 0) {
      console.log(this.state.secondsLeft)
      return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
    } else {
      console.log(this.state.secondsLeft)
      return <div>Boom!</div>
    }
  }

  render() {
    return this.renderSeconds()
    }
}
