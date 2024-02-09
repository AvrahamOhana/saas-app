import React from "react";
import { Box, Grid, Paper, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Typography variant="h4" color="initial">
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Card variant="outlined" bgcolor="#FE4A49">
            card
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">card</Card>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
