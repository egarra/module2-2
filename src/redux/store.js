import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todosSlice';
import { filterReducer } from './filterSlice';
import { friendsReducer } from './friends/friendsSlice';
import { authSlice } from './auth/slice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage: storage,
};

const authPersistReducer = persistReducer(authPersistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    friends: friendsReducer,
    filter: filterReducer,
    auth: authPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
