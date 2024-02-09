import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  useTheme,
} from "@mui/material";
import {
  Home,
  Article,
  Group,
  Settings,
  AccountBox,
  ModeNight,
} from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";


function Sidebar({ setMode, mode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isActive = (path) => location.pathname === path;

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem
          disablePadding
          onClick={() => {
            navigate("/");
          }}
          sx={{ backgroundColor: isActive("/") ? theme.palette.action.selected : 'transparent' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            navigate("/users");
          }}
          sx={{ backgroundColor: isActive("/users") ? theme.palette.action.selected : 'transparent' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText>Users</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            navigate("/profile");
          }}
          sx={{ backgroundColor: isActive("/profile") ? theme.palette.action.selected : 'transparent' }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => {
            navigate("/settings");
          }}
          sx={{ backgroundColor: isActive("/settings") ? theme.palette.action.selected : 'transparent' }}
        >
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
            <Switch
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}

export default Sidebar;
