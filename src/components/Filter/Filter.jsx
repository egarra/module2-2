import { filterTodo } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      onChange={e => {
        const action = filterTodo(e.target.value);
        dispatch(action);
      }}
    />
  );
};
