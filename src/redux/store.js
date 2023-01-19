import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todosSlice';
import { filterReducer } from './filterSlice';
import { friendsReducer } from './friends/friendsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const todosPersistConfig = {
//   key: 'todos',
//   storage: storage,
// };

// const friendsPersistConfig = {
//   key: 'friends',
//   storage: storage,
// };
// const todosPersistReducer = persistReducer(todosPersistConfig, todosReducer);
// const friendsPersistReducer = persistReducer(friendsPersistConfig, friendsReducer);

/* const rootReducer = combineReducers({
  todos: todosReducer,
  friends: friendsReducer,
  filter: filterReducer
}) */

/* const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['filter']
} */

/* const persistedReducer = persistReducer(rootPersistConfig, rootReducer) */

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
