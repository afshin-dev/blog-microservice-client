import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id?: string;
  title: string;
  content?: string;
  image?: string;
}

interface PostsSliceState {
  entities: Post[];
  isLoading: boolean;
}

const initialState: PostsSliceState = {
  entities: [],
  isLoading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    populateAllPosts: (state, actions: PayloadAction<Post[]>) => {
      state.entities = actions.payload;
    },
  },
});

export const { populateAllPosts } = postsSlice.actions;
export default postsSlice.reducer;
