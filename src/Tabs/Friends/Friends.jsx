import { Component } from 'react';
import { FriendsForm } from 'components/FriendsForm/FriendsForm';
import { nanoid } from 'nanoid';
import { FriendList } from 'components/FriendList/FriendList';

export class Friends extends Component {
  state = {
    friends: [],
  };

  onFormSubmit = friend => {
    // console.log(friend);
    const isExist = this.state.friends.find(item => {
      return item.name === friend.name;
    });
    if (isExist) {
      alert('Already exist!');
      return;
    }
    this.setState(prevState => ({
      friends: [...prevState.friends, { ...friend, id: nanoid() }],
    }));
  };

  render() {
    return (
      <>
        <FriendsForm onFormSubmit={this.onFormSubmit} />
        <FriendList friends={this.state.friends} />
      </>
    );
  }
}
