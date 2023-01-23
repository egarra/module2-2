import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceRegister = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (user, thunkAPI) => {
    try {
      const response = await instanceRegister.get('/auth');
      return response.data;
    } catch (event) {
      return thunkAPI.rejectWithValue(event.message);
    }
  }
);

// export const deleteRegister = createAsyncThunk(
//   'auth/deleteRegister',
//   async (id, thunkAPI) => {
//     try {
//       const response = await instanceFriends.delete(`/friends/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
