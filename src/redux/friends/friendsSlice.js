import { createSlice } from '@reduxjs/toolkit';
import { fetchFriends, deleteFriends } from './operations';

const friendsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  extraReducers: {
    [fetchFriends.pending](state) {
      state.isLoading = true;
    },
    [fetchFriends.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = [...payload].reverse();
    },
    [fetchFriends.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    [deleteFriends.pending](state) {
      state.isLoading = true;
    },
    [deleteFriends.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      console.log('payload', payload);
      state.items = state.items.filter(item => item.id !== payload.id);
    },
    [deleteFriends.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const friendsReducer = friendsSlice.reducer;
