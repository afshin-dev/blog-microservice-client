import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Post {
  id?: string;
  title: string;
  content?: string;
  image?: string;
}

// purpose of this extra object in post slice is :
// maintain all posts that user specificly visit
// yes it is a extra overhead but
// good for sending analytic data to backend
export interface VisitedPosts {
  [key: string]: Post;
}
interface PostsSliceState {
  entities: Post[];
  isLoading: boolean;
  visitedPosts: VisitedPosts;
}

const initialState: PostsSliceState = {
  entities: [],
  isLoading: false,
  visitedPosts: {},
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    populateAllPosts: (state, actions: PayloadAction<Post[]>) => {
      state.entities = actions.payload;
    },
    addVisitedPost: (state, action: PayloadAction<Post>) => {
      if (!action.payload.id) {
        throw new Error(
          "store reducer receive a post with no id associated with it"
        );
      }
      state.visitedPosts[action.payload.id] = action.payload;
    },
  },
});

export const { populateAllPosts, addVisitedPost } = postsSlice.actions;
export default postsSlice.reducer;
