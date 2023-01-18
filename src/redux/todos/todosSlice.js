import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

// const tasksInitialState = [];
const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
      })
      .addCase(deleteTodo.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
      })
      .addMatcher(
        isAnyOf(fetchTodos.fulfilled, addTodo.fulfilled, deleteTodo.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(fetchTodos.pending, addTodo.pending, deleteTodo.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchTodos.rejected, addTodo.rejected, deleteTodo.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});
// extraReducers: {
//   // Код остальных редюсеров
//   [fetchTodos.pending](state) {
//     state.isLoading = true;
//   },
//   [fetchTodos.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = [...payload].reverse();
//   },
//   [fetchTodos.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = payload;
//   },
//   [addTodo.pending](state) {
//     state.isLoading = true;
//   },
//   [addTodo.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = [payload, ...state.items];
//   },
//   [addTodo.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = payload;
//   },
//   [deleteTodo.pending](state) {
//     state.isLoading = true;
//   },
//   [deleteTodo.fulfilled](state, { payload }) {
//     state.isLoading = false;
//     state.error = null;
//     console.log('payload', payload);
//     state.items = state.items.filter(item => item.id !== payload.id);
//   },
//   [deleteTodo.rejected](state, { payload }) {
//     state.isLoading = false;
//     state.error = payload;
//   },
// },

export const todosReducer = todosSlice.reducer;
