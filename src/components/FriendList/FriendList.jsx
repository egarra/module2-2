import { useSelector } from 'react-redux';
import css from './FriendList.module.css';
import { useDispatch } from 'react-redux';

export const FriendList = () => {
  const dispatch = useDispatch();
  const friends = useSelector(state => state.friends.items);
  return (
    <ul>
      {friends.map(({ name, email, phone, online, id }) => {
        const mailTo = 'mailto:' + email;
        const tel = 'tel' + phone;
        return (
          <li className={css.item} key={name}>
            <h3>{name}</h3>
            <a href={mailTo}>{email}</a>
            <a href={tel}>{phone}</a>
            <span
              className={css.circle}
              style={{
                backgroundColor: online ? 'green' : 'red',
                width: 10,
                height: 10,
                display: 'block',
              }}
            ></span>
            <button
              type="button"
              onClick={() => {
                // const action = deleteFriend(id);
                // dispatch(action);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
