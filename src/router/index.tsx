import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../components/Posts";

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
    ],
  },
]);
