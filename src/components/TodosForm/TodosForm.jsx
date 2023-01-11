import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from 'redux/todosSlice';

export const TodosForm = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

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
      id: nanoid(),
    };
    const action = addTodo(todo);
    console.log('action', action);
    // dispatch(addTodo(todo));
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={inputChange} />
      <button type="submit">create todo</button>
    </form>
  );
};
