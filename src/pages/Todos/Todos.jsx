import { TodosForm } from 'components/TodosForm/TodosForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';
import { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const [filter, setFilter] = useState('');

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
      <TodosForm />
      <p>Enter your search value</p>
      <Filter onInputChange={onInputChange} />
      <ToDoList data={filteredToDos()} deleteToDo={deleteToDo} />
    </>
  );
};
