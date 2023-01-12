import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todosSlice';
import { filterReducer } from './filterSlice';
import { friendsReducer } from './friendsSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
    friends: friendsReducer,
  },
});
