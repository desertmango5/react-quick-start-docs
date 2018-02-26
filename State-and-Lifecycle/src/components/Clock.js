import React from 'react';
import '../styles/Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        <h2>The Current Time is <span className="time">{this.state.date.toLocaleTimeString()}</span></h2>
      </div>
    )
  }
}

export default Clock;