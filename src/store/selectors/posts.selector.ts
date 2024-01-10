import type { RootState } from "../index";

export const allPosts = (state: RootState) => {
  return state.posts.entities;
};
