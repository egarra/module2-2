import { useState } from 'react';
import { useDispatch } from 'react-redux';
export const FriendsForm = ({ onFormSubmit }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});

  const inputChange = event => {
    const { name, value, checked } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value === 'on' && name === 'online' ? checked : value,
    }));
  };
  const handleSubmit = event => {
    event.preventDefault();
    // const action = addFriend(userData);
    // dispatch(action);
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
