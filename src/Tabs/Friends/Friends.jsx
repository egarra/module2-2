import { useState } from 'react';
import { FriendsForm } from 'components/FriendsForm/FriendsForm';
import { nanoid } from 'nanoid';
import { FriendList } from 'components/FriendList/FriendList';
export const Friends = () => {
  const [friends, setFriends] = useState([]);
  const onFormSubmit = friend => {
    const isExist = friends.find(item => {
      return item.name === friend.name;
    });
    if (isExist) {
      alert('Already exist!');
      return;
    }
    setFriends(prevState => [...prevState, { ...friend, id: nanoid() }]);
  };

  const deleteFriend = id => {
    setFriends(prevState => {
      return prevState.filter(friend => friend.id !== id);
    });
  };
  return (
    <>
      <FriendsForm onFormSubmit={onFormSubmit} />
      <FriendList friends={friends} deleteFriend={deleteFriend} />
    </>
  );
};

// export class Friends extends Component {
//   state = {
//     friends: [],
//   };

//   onFormSubmit = friend => {
//     // console.log(friend);
//     const isExist = this.state.friends.find(item => {
//       return item.name === friend.name;
//     });
//     if (isExist) {
//       alert('Already exist!');
//       return;
//     }
//     this.setState(prevState => ({
//       friends: [...prevState.friends, { ...friend, id: nanoid() }],
//     }));
//   };

//   render() {
//     return (
//       <>
//         <FriendsForm onFormSubmit={this.onFormSubmit} />
//         <FriendList friends={this.state.friends} />
//       </>
//     );
//   }
// }
