import { TodosForm } from 'components/TodosForm/TodosForm';
import { ToDoList } from 'components/ToDoList/ToDoList';
import { Filter } from 'components/Filter/Filter';

export const Todos = () => {
  return (
    <>
      <TodosForm />
      <p>Enter your search value</p>
      <Filter />
      <ToDoList />
    </>
  );
};
