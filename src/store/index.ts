import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/posts.slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
