import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comment {
  id: string;
  content: string;
}

export interface Comments {
  [key: string]: Comment[];
}

export interface CommentsSliceState {
  entities: Comments;
}

const initialState: CommentsSliceState = {
  entities: {},
};

type PopulateCommentsForSinglePostPayload = {
  comments: Comment[];
  postId: string;
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    populateCommentsForSinglePost: (
      state,
      action: PayloadAction<PopulateCommentsForSinglePostPayload>
    ) => {
      state.entities[action.payload.postId] = action.payload.comments;
    },
  },
});

export const { populateCommentsForSinglePost } = commentsSlice.actions;
export default commentsSlice.reducer;
