import React, { Component } from 'react';
import moment from 'moment';

class Timer extends Component {

  state = {
    deadline: new Date(2017,3,23,24,0,0,0).getTime(),
    handle: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    hours: 0,
  }

  timeLeft = () => {
    const now = new Date().getTime();
    const timeDifference = this.state.deadline - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }

  componentDidMount() {
    handle = setInterval(() => { this.setState({...this.timeLeft()}) }, 1000 )
    this.setState({ handle })
  }

  componentWillUnmount() {
    clearInterval(this.state.handle);
  }

  render() {
    return (
      <div className="Timer">
        <span className="TimerDigit">{this.state.seconds}</span>
        <span className="TimerText">seconds</span>
      </div>
    );
  }
}

export default Timer;
