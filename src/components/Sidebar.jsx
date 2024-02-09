import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import { Home, Article, Group, Settings, AccountBox, ModeNight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
function Sidebar({ setMode, mode}) {
  const navigate = useNavigate();
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding onClick={()=>{navigate("/")}}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          
        </ListItem>



        <ListItem disablePadding onClick={()=>{navigate("/users")}}>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=>{navigate("/profile")}}>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding onClick={()=>{navigate("/settings")}}>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch onChange={e =>setMode(mode === "light" ? "dark" : "light")}/>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );
}

export default Sidebar;
