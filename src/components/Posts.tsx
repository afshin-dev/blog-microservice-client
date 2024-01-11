import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Post, populateAllPosts } from "../store/slices/posts.slice";
import { allPosts } from "../store/selectors/posts.selector";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate, Link as RRLink } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();

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
            <Card>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Divider></Divider>
                <Typography variant="caption">
                  {post.content?.slice(0, 45)}
                  {"..."}
                </Typography>
              </CardContent>

              <CardActions>
                {/* <Button
                  size="small"
                  onClick={() => {
                    navigate(`/posts/${post.id}`, {});
                  }}
                >
                  see the full post
                </Button> */}
                <Link
                  variant="button"
                  component={RRLink}
                  to={`/posts/${post.id}`}
                  sx={{ textDecoration: "none" }}
                >
                  see full post
                </Link>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Posts;
