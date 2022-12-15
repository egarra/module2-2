export const ToDoList = ({ data, deleteToDo }) => {
  return (
    <ul>
      {data.map(({ text, id }) => (
        <li key={id}>{text}
          <button type="button" onClick={() => deleteToDo(id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};
