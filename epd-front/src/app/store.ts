import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { emailApi } from '../services/email';
import emailsReducer from '../features/email/emailSlice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [emailApi.reducerPath]: emailApi.reducer,
    emails: emailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch