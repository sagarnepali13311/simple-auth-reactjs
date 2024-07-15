import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/main", element: <MainPage /> },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
