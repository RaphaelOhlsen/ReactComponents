import React, { Component } from 'react';

class DisplayDate extends Component {

  state = {
    time: ''
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    const { 
      typeInter,
      date,
      weekDay,
      clock, 
      showSeconds, 
      hour12
    } = this.props;

    const type = {
      year: date && 'numeric',
      month: date && 'numeric',
      day: date && 'numeric',
      weekday: weekDay && 'long',
      hour: clock && 'numeric',
      minute: clock && 'numeric',
      second: showSeconds && 'numeric',
      hour12: hour12 && true,
      region: typeInter ? 'en-US' : 'pt-BR'
  }
    this.setState({
      time: new Date().toLocaleString(type.region, type)
    });
  }
  
  render() {
    const { time } = this.state;
    const { color, fontWeight, textTransform } = this.props;
    return (
        <span  style={{fontWeight, color, textTransform}}>{time}</span>
    )
  }
}

export default DisplayDate;