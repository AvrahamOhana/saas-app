import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom"; 




export default function RootLayout() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />

        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Box flex={6} p={2} >
          <Outlet />
    </Box>
          
        </Stack>
      </Box>
      
      
    </ThemeProvider>
  );
}
