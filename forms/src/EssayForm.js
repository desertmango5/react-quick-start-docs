import React from 'react';

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: 'Please write an essay about your favorite DOM element.',
    }
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert(`An essay was submitted: ${this.state.value}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay: <textarea value={this.state.value} onChange={this.handleChange} rows="5" cols="30"></textarea>
        </label>
        <input type="submit" value="Submit" className="button__submit" />
      </form>
    );
  }
}

export default EssayForm;