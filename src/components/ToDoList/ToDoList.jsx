import { useSelector } from 'react-redux';
import { deleteTodo } from 'redux/todos/operations';
import { useDispatch } from 'react-redux';
import { selectVisibleTodos } from 'redux/todos/selectors';

export const ToDoList = () => {
  const visibleTodos = useSelector(selectVisibleTodos);

  const dispatch = useDispatch();

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
