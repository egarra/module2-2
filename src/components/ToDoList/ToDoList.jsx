import { useSelector } from 'react-redux';

export const ToDoList = ({ data, deleteToDo }) => {
  const todos = useSelector(state => state.todos);
  return (
    <ul>
      {todos.map(({ text, id }) => (
        <li key={id}>
          {text}
          <button type="button" onClick={() => deleteToDo(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
