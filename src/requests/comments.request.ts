import axios from "axios";

const commentsRequest = axios.create({
  baseURL: "http://localhost:4401",
});

export default commentsRequest;
