import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceFriends = axios.create({
  baseURL: 'https://63c93580904f040a9658afb8.mockapi.io/api/v1/',
});

export const fetchFriends = createAsyncThunk(
  'friends/fetchFriends',
  async (_, thunkAPI) => {
    try {
      const response = await instanceFriends.get('/friends');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

export const deleteFriends = createAsyncThunk(
  'friends/deleteFriend',
  async (id, thunkAPI) => {
    try {
      const response = await instanceFriends.delete(`/friends/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
