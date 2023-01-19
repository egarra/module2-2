import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from 'redux/todos/operations';
import { TodosForm } from 'components/TodosForm/TodosForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';

export const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <TodosForm />
      <p>Enter your search value</p>
      <Filter />
      <ToDoList />
    </>
  );
};
