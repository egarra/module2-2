import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchRegister, refreshUser, fetchLogin } from './operations';

const initialState = {
  token: null,
  user: {
    name: null,
    email: null,
  },
  isLoggined: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchRegister.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(fetchLogin.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
      }),
});
