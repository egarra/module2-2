import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceTodos = axios.create({
  baseURL: 'https://63c683234ebaa80285476130.mockapi.io/',
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const response = await instanceTodos.get('/todos');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (todo, thunkAPI) => {
    try {
      const response = await instanceTodos.post('/todos', todo);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
