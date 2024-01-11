import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Post, populateAllPosts } from "../store/slices/posts.slice";
import { allPosts } from "../store/selectors/posts.selector";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";

const Posts = () => {
  const dispatch = useDispatch();

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
      <Grid item lg={4} sm={3} xs={2} xl={5}></Grid>l
    </Grid>
  );
};

export default Posts;
