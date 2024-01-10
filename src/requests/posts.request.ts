import axios from "axios";

const postRequest = axios.create({
  baseURL: "http://localhost:4400",
});

export default postRequest;
