import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: { todos: todosReducer, filter: filterReducer },
});
