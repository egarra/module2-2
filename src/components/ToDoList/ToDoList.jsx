export const ToDoList = ({ data }) => {
  return (
    <ul>
      {data.map(({ text, id }) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
};
