import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset className="input">
        <legend>Enter {scaleNames[scale]} temperature</legend>
        <input
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

export default TemperatureInput;
