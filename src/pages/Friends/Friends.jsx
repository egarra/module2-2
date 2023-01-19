import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FriendsForm } from 'components/FriendsForm/FriendsForm';
import { FriendList } from 'components/FriendList/FriendList';
import { fetchFriends } from 'redux/friends/operations';

export const Friends = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);
  return (
    <>
      <FriendsForm />
      <FriendList />
    </>
  );
};
