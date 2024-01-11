import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singlePost } from "../store/selectors/posts.selector";
import { Container } from "@mui/material";

const Post = () => {
  const { postId } = useParams();
  const post = useSelector(singlePost(postId!));

  return <Container>{post?.title}</Container>;
};

export default Post;
