export const FriendList = ({ friends, deleteFriend }) => {
  return (
    <ul>
      {friends.map(({ name, email, phone, online, id }) => {
        const mailTo = 'mailto:' + email;
        const tel = 'tel' + phone;
        return (
          <li key={name}>
            <h3>{name}</h3>
            <a href={mailTo}>{email}</a>
            <a href={tel}>{phone}</a>
            <span
              style={{
                backgroundColor: online ? 'green' : 'red',
                width: 10,
                height: 10,
                display: 'block',
              }}
            ></span>
            <button type="button" onClick={() => deleteFriend(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
