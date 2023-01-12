import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState: {items: []},
  reducers: {
    addTodo(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(todo => todo.id !== payload);
    },
  },
});
export const { addTodo, deleteTodo } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
