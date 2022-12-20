export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ name, email, phone, online }) => {
        const mailTo = 'mailto:' + email;
        const tel = 'tel' + phone;
        return (
          <li>
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
          </li>
        );
      })}
    </ul>
  );
};
