import React from "react";
import { Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import background from "../assets/newFondo.png";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function Home() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/whisp-gaming");
  };
  return (
    <Grid container spacing={1} sx={{ color: "red" }}>
      <Grid item xs={2} md={3}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid item xs={8} md={6}>
        <Item md={1}>xs=6</Item>
        <Card></Card>
      </Grid>
      <Grid item xs={2} md={3}>
        <Item>xs=6 md=4</Item>
      </Grid>
      <Button onClick={() =>{ handleBack()}}>Back</Button>
    </Grid>
  );
}

export default Home;
