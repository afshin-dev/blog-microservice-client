import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SingleVisitedPost } from "../store/selectors/posts.selector";
import { Container, Divider, Typography } from "@mui/material";
import Comments from "./Comments";
import { useEffect } from "react";
import postsRequest from "../requests/posts.request";
import { Post as PostType, addVisitedPost } from "../store/slices/posts.slice";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

const Post = () => {
  const dispatch = useDispatch();

  const { postId } = useParams();

  // then we visit visited posts
  // if user straght goes to single post page
  const post = useSelector(SingleVisitedPost(postId || ""));

  useEffect(() => {
    const fetchSinglePost = async () => {
      try {
        const resp = await postsRequest.get<PostType>(`/posts/${postId}`);
        dispatch(addVisitedPost(resp.data));
      } catch (e: unknown) {
        console.log(e as AxiosError);
      }
    };
    if (!post) {
      fetchSinglePost();
    }
  }, [postId, dispatch, post]);

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h6">{post?.title}</Typography>
      <Divider></Divider>
      <Divider></Divider>
      <Typography sx={{ mt: 3 }}>{post?.content}</Typography>
      <Comments></Comments>
    </Container>
  );
};

export default Post;
