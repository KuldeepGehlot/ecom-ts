import { combineReducers, configureStore } from '@reduxjs/toolkit'

import productRedux from '../redux/productRedux';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
const migrations = {
  0: () => {
    // if (window.location.href.split("/")[3] !== '') {
    //   window.location.href = "/"
    // }
    return undefined;
  }
}

const persistConfig = {
  key: "root",
  version: 0,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
};

const rootReducer = combineReducers({
  productRedux: productRedux,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch