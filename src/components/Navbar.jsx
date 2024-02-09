import React from "react";
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail, Notifications } from "@mui/icons-material";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Company
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={5} color="error">
            <Mail />
          </Badge>

          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>

          <Avatar
            src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            onClick={handleClick}
          />
        </Icons>
        <UserBox>
          <Avatar
            src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            onClick={handleClick}
          />
        </UserBox>
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
