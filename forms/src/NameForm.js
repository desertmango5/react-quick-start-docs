import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {value: ''};
  }

  // will handle every keystoke
  // typing in form box will be uppercase letters
  handleChange(e) {
    this.setState({value: e.target.value.toUpperCase()});
  }

  handleSubmit(e) {
    alert(`A name was submitted: ${this.state.value}`);
    e.preventDefault();
    this.setState({value: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" className="button__submit" />
        </form>
        <h4>{this.state.value}</h4>
      </div>
    );
  }
}

export default NameForm;