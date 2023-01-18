import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

// const tasksInitialState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // Код остальных редюсеров
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [...payload].reverse();
    },
    [fetchTodos.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addTodo.pending](state) {
      state.isLoading = true;
    },
    [addTodo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [payload, ...state.items];
    },
    [addTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      console.log('payload', payload);
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    [deleteTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
