import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchRegister,
  refreshUser,
  fetchLogin,
  fetchLogOut,
} from './operations';

const initialState = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  isLoggined: false,
  isLoading: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggined = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggined = true;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggined = true;
      })
      .addCase(fetchLogOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggined = false;
      }),
});
