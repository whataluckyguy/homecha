import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Chat from "./Pages/Chat.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/chat", element: <Chat /> },
  {
    path: "*",
    element: <h1>Page Not Found!</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StyledEngineProvider injectFirst> */}
    <RouterProvider router={router} />
    {/* </StyledEngineProvider> */}
  </React.StrictMode>
);
