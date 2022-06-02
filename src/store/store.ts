import { configureStore } from '@reduxjs/toolkit';
import managerUserReducer from '../features/manager/managerUserSlice';


export const store = configureStore({
  reducer: {
    managerUser: managerUserReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch