// react import
import React from "react";
import ReactDOM from "react-dom/client";

// redux import
import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "./store/index";

// react router impot
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index";

// material font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReduxStoreProvider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </ReduxStoreProvider>
  </React.StrictMode>
);
