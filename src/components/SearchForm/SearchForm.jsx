import { Component } from 'react';

export class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  inputChange = event => {
    this.setState({ searchValue: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.searchValue);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.inputChange} />
        <button type="submit"> {this.props.btnText} </button>
      </form>
    );
  }
}
