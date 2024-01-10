import axios from "axios";

const postsRequest = axios.create({
  baseURL: "http://localhost:4400",
});

export default postsRequest;
