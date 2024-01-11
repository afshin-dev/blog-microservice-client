import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../components/Posts";
import Post from "../components/Post";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <div>Page does not exist</div>,
    children: [
      {
        path: "posts",
        element: <Posts></Posts>,
      },
      {
        path: "posts/:postId",
        element: <Post></Post>,
      },
    ],
  },
]);
