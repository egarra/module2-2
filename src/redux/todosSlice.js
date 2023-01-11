import { createSlice, current } from '@reduxjs/toolkit';

// const tasksInitialState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo(state, { payload }) {
      return [...state, payload];
    },
    deleteTodo(state, { payload }) {
      return state.filter(todo => todo.id !== payload);
    },
  },
});
export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
