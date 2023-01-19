import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends } from './operations';

const friendsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: builder =>
    builder
      .addCase(fetchFriends.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
      }),
});

export const friendsReducer = friendsSlice.reducer;
