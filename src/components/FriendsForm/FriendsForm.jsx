import { useState } from 'react';
export const FriendsForm = ({ onFormSubmit }) => {
  const [userData, setUserData] = useState({});
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [online, setOnline] = useState(false);
  // const inputChange = event => {
  //   const { name, value, checked } = event.target;
  //   console.log(name);
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'email':
  //       setEmail(value);
  //       break;
  //     case 'phone':
  //       setPhone(value);
  //       break;
  //     case 'online':
  //       setOnline(value === 'on' ? checked : value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const inputChange = event => {
    const { name, value, checked } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value === 'on' && name === 'online' ? checked : value,
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    onFormSubmit(userData);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={inputChange} />
      <input name="email" placeholder="Email" onChange={inputChange} />
      <input name="phone" placeholder="Phone" onChange={inputChange} />
      <label>
        IsOnline
        <input name="online" type="checkbox" onChange={inputChange} />
      </label>
      <button type="submit"> Save </button>
    </form>
  );
};
// export class FriendsForm extends Component {
//   state = {
//     name: '',
//     email: '',
//     phone: '',
//     online: false,
//   };

//   inputChange = event => {
//     const { name, value, checked } = event.target;
//     this.setState({ [name]: value === 'on' ? checked : value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onFormSubmit(this.state);
//     event.target.reset();
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input name="name" placeholder="Name" onChange={this.inputChange} />
//         <input name="email" placeholder="Email" onChange={this.inputChange} />
//         <input name="phone" placeholder="Phone" onChange={this.inputChange} />
//         <label>
//           IsOnline
//           <input name="online" type="checkbox" onChange={this.inputChange} />
//         </label>
//         <button type="submit"> Save </button>
//       </form>
//     );
//   }
// }
