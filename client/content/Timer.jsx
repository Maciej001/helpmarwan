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
      minutes: minutes > 9 ? `${minutes}` : `0${minutes}`,
      seconds: seconds > 9 ? `${seconds}` : `0${seconds}`,
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
        <div className="Header">
          <h1>Marwan will have to leave Spain in</h1>
        </div>
        <div className="Display">
          <span className="TimerDigit">{this.state.days}</span>
          <span className="TimerText">days</span>
          <span className="TimerDigit">{this.state.hours}</span>
          <span className="TimerText">h</span>
          <span className="TimerDigit">{this.state.minutes}</span>
          <span className="TimerText">m</span>
          <span className="TimerDigit">{this.state.seconds}</span>
          <span className="TimerText">s</span>
        </div>
      </div>
    );
  }
}

export default Timer;
