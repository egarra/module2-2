import { createSelector } from '@reduxjs/toolkit';

export const getTodoItems = state => state.todos.items;
export const getFilter = state => state.filter;

export const selectVisibleTodos = createSelector(
  [getTodoItems, getFilter],
  (todos, filter) => {
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
