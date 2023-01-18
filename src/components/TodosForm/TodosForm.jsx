import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from 'redux/todos/operations';
import { getTodoItems } from 'redux/todos/selectors';

export const TodosForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodoItems);

  const [searchValue, setSearchValue] = useState('');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isAtList = todos.find(todo => todo.text === searchValue);
    if (isAtList) {
      alert('already in list');
      return;
    }
    const todo = {
      text: searchValue,
    };
    const action = addTodo(todo);
    dispatch(action);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={inputChange} />
      <button type="submit">create todo</button>
    </form>
  );
};
