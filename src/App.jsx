import React from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Users from "./components/pages/Users";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import RootLayout from "./components/RootLayout";
const router = createBrowserRouter([
  {path: "/", 
  element: <RootLayout />,
children: [
  {path: "/", element: <Home/>},
  {path: "/users", element: <Users />},
  {path: "/profile", element: <Profile />},
  {path: "/settings", element: <Settings />},
  
]},

]);


export default function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <RouterProvider router={router} />
  );
}
