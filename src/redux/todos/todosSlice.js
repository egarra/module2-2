import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './operations'

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
      state.items = payload;
    },
    [fetchTodos.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // reducers: {
  //   addTodo(state, { payload }) {
  //     state.items = [...state.items, payload];
  //   },
  //   deleteTodo(state, { payload }) {
  //     state.items = state.items.filter(todo => todo.id !== payload);
  //   },
  // },
});

export const todosReducer = todosSlice.reducer;
