import { nanoid } from 'nanoid';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const [filter, setFilter] = useState('');

  const onFormSubmit = text => {
    const isAtList = todos.find(todo => todo.text === text);
    if (isAtList) {
      alert('already in list');
      return;
    }
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevState => [...prevState, todo]);
  };
  const deleteToDo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };
  const onInputChange = filter => {
    setFilter(filter);
  };
  const filteredToDos = () => {
    return todos.filter(todo => todo.text.includes(filter));
  };
  return (
    <>
      <SearchForm onFormSubmit={onFormSubmit} btnText="Create" />
      <p>Enter your search value</p>
      <Filter onInputChange={onInputChange} />
      <ToDoList data={filteredToDos()} deleteToDo={deleteToDo} />
    </>
  );
};

