import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todosSlice';
import { filterReducer } from './filterSlice';
import { friendsReducer } from './friends/friendsSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    friends: friendsReducer,
    filter: filterReducer,
  },
});
