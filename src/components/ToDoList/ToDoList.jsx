import { useSelector } from 'react-redux';
import { deleteTodo } from 'redux/todosSlice';
import { useDispatch } from 'react-redux';

export const ToDoList = () => {
  const todos = useSelector(state => state.todos);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const visibleTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {visibleTodos.map(({ text, id }) => (
        <li key={id}>
          {text}
          <button
            type="button"
            onClick={() => {
              const action = deleteTodo(id);
              dispatch(action);
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
