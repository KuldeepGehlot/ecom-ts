import { configureStore } from '@reduxjs/toolkit'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import createMigrate from 'redux-persist/es/createMigrate';
import storage from "redux-persist/lib/storage";

const migrations = {
  2:()=>{
    if (window.location.href.split("/")[3] !== '') {
      window.location.href = "/"
    }
    return undefined;
  }
}


const persistConfig = {
  key: "root",
  version: 2,
  storage,
  migrate: createMigrate(migrations, { debug: false }),
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function () {
        sessionStorage.removeItem('state')
      },
    }),
  ],
  
};


const store = configureStore({
  reducer: {
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch