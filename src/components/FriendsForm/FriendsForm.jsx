import { Component } from 'react';

export class FriendsForm extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    online: false,
  };

  inputChange = event => {
    const {name, value, checked} = event.target
    this.setState({ [name]: value === 'on' ? checked : value});
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    event.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' placeholder='Name' onChange={this.inputChange} />
        <input name='email' placeholder='Email' onChange={this.inputChange} />
        <input name='phone' placeholder='Phone' onChange={this.inputChange} />
        <label>IsOnline<input name='online' type='checkbox' onChange={this.inputChange}/></label>
        <button type="submit"> Save </button>
      </form>
    );
  }
}
