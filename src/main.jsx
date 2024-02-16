import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import Chat from "./Pages/Chat.jsx";
import Login from "./Pages/Login.jsx";
import { UserContext } from "./Context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/login/chat", element: <Chat /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <h1>Page Not Found!</h1>,
  },
]);

const user = { email: "test@deloitte.com", password: "1234" };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <StyledEngineProvider injectFirst> */}
    <UserContext.Provider value={{ user }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
    {/* </StyledEngineProvider> */}
  </React.StrictMode>
);
