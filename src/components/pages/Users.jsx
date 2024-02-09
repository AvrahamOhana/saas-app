import React from "react";
import { Box, Typography } from "@mui/material";
import PersonList from "../PersonList";
function Users() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Typography variant="h4" color="initial">
        Users
      </Typography>
      <PersonList />
    </Box>
  );
}

export default Users;
