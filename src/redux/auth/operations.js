import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instanceRegister = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const token = {
  set(token) {
    instanceRegister.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceRegister.defaults.headers.common.Authorization = ``;
  },
};

export const fetchRegister = createAsyncThunk(
  'auth/fetchRegister',
  async (user, thunkAPI) => {
    try {
      const { data } = await instanceRegister.post('/users/signup', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async (user, thunkAPI) => {
    try {
      const { data } = await instanceRegister.post('/users/login', user);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Error');
    }

    token.set(persistedToken);

    try {
      const { data } = await instanceRegister.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
