import { Box, List, ListItemText } from "@mui/material";
import { useParams } from "react-router-dom";
import commentsRequest from "../requests/comments.request";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Comment,
  populateCommentsForSinglePost,
} from "../store/slices/comments.slice";
import { useSelector } from "react-redux";
import { commentsByPostId } from "../store/selectors/comments.selector";

const Comments = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(commentsByPostId(postId));

  useEffect(() => {
    const fetchAllComments = async () => {
      const resp = await commentsRequest.get<Comment[]>(`/comments/${postId}`);
      dispatch(
        populateCommentsForSinglePost({
          postId: postId || "",
          comments: resp.data,
        })
      );
    };

    fetchAllComments();
  }, [postId, dispatch]);

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <List>
        {comments?.map((c) => {
          return <ListItemText key={c.id}>{c.content}</ListItemText>;
        })}
      </List>
    </Box>
  );
};

export default Comments;
