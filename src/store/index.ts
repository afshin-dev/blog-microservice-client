import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";
import commentsSlice from "./slices/comments.slice";
export const store = configureStore({
  reducer: {
    posts: postsSlice,
    comments: commentsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
