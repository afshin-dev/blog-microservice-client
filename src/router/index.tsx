import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    index: true,
    errorElement: <div>Page does not exist</div>,
  },
]);
