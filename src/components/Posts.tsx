import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Post, populateAllPosts } from "../store/slices/posts.slice";
import { allPosts } from "../store/selectors/posts.selector";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(allPosts);

  useEffect(() => {
    const getAllposts = async () => {
      try {
        const resp = await axios.get<Post[]>("http://localhost:4400/posts");
        dispatch(populateAllPosts(resp.data));
      } catch (e) {
        console.log(e);
      }
    };

    getAllposts();

    return;
  }, [dispatch]);

  return (
    <Grid container spacing={1}>
      {posts.map((post) => {
        return (
          <Grid item lg={3} xl={2} md={4} sm={5} xs={6} key={post.id}>
            {post.title}
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
