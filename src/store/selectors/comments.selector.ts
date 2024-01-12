import { RootState } from "..";
import { Comment } from "../slices/comments.slice";

export const commentsByPostId: (
  id: string | undefined
) => (state: RootState) => Comment[] | null =
  (postId) => (state: RootState) => {
    if (postId) {
      return state.comments.entities[postId] || null;
    } else {
      return null;
    }
  };
