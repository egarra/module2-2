import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterTodo(state, { payload }) {
      return payload;
    },
  },
});
export const { filterTodo } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
