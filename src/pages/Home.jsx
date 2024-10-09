import React from "react";
import { Grid, Button, Box } from "@mui/material";
import background from "../assets/newFondo.png";
import { useNavigate } from "react-router-dom";
import Card from "../Card";

function Home() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/whisp-gaming");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        padding: "20px",
        
        
      }}
    >
      <Grid container>
        <Grid item xs={2} md={2}></Grid>
        <Grid xs={8} md={8}>
          <Grid container spacing={2}>
            <Card></Card>
          </Grid>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
        <Button
          onClick={() => {
            handleBack();
          }}
        >
          Back
        </Button>
      </Grid>
    </Box>
  );
}

export default Home;
