import React, { Component } from "react";

class Task3v2 extends Component {
  state = {
    timer: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => {
        return {
          timer: prevState.timer + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timer } = this.state;
    return (
      <div>
        <h3>class approach</h3>
        <div>{timer}</div>
      </div>
    );
  }
}

export default Task3v2;
