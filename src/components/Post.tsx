import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singlePost } from "../store/selectors/posts.selector";
import { Container, Divider, Typography } from "@mui/material";

const Post = () => {
  const { postId } = useParams();
  const post = useSelector(singlePost(postId!));

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h6">{post?.title}</Typography>
      <Divider></Divider>
      <Divider></Divider>
      <Typography sx={{ mt: 3 }}>{post?.content}</Typography>
    </Container>
  );
};

export default Post;
