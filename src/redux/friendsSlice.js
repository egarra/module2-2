import { createSlice } from '@reduxjs/toolkit';

const friendsInitialState = {items: []};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: friendsInitialState,
  reducers: {
    addFriend(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteFriend(state, { payload }) {
      state.items = state.items.filter(friends => friends.id !== payload);
    },
  },
});
export const { addFriend, deleteFriend } = friendsSlice.actions;

export const friendsReducer = friendsSlice.reducer;
