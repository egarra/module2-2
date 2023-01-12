import { createSlice } from '@reduxjs/toolkit';

const friendsInitialState = [];

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  reducers: {
    addFriend(state, { payload }) {
      return [...state, payload];
    },
    deleteFriend(state, { payload }) {
      return state.filter(friends => friends.id !== payload);
    },
  },
});
export const { addFriend, deleteFriend } = friendsSlice.actions;

export const friendsReducer = friendsSlice.reducer;
