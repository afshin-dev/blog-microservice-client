import type { RootState } from "../index";
import type { Post } from "../slices/posts.slice";

export const allPosts = (state: RootState) => {
  return state.posts.entities;
};

// select on post from store
export const singlePost: (
  id: string
) => (state: RootState) => Post | undefined =
  (id: string) => (state: RootState) => {
    return state.posts.entities.find((post) => post.id === id);
  };
