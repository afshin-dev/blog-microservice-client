import { Box, Button, Container, TextField } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import React from "react";
import { Post, populateAllPosts } from "../store/slices/posts.slice";
import { useDispatch } from "react-redux";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleCreatePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) {
      return;
    }

    try {
      const resp = await axios.post<Post[]>("http://localhost:4400/posts/", {
        title: title,
        content: content,
      });
      dispatch(populateAllPosts(resp.data));
    } catch (e: unknown) {
      console.log(e);
    }
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Box
        component={"form"}
        display={"flex"}
        flexDirection={"column"}
        autoComplete="off"
        onSubmit={handleCreatePost}
      >
        <TextField
          helperText="title of your post"
          variant="filled"
          fullWidth
          required
          label="required"
          onChange={(e) => setTitle(e.target.value)}
        ></TextField>
        <TextField
          helperText="write body of your post"
          variant="standard"
          fullWidth
          label="content"
          multiline
          rows={8}
          onChange={(e) => setContent(e.target.value)}
        ></TextField>
        <Button variant="contained" type="submit">
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default CreatePost;
