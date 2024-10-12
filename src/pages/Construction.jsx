import wgLogo from "../assets/wg-logo.png";
import background from "../assets/newFondo.png";
import { Grid, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Construction = () => {
  const navigate = useNavigate();
  const handleLink = () => {
    location.href = "https://twitter.com/whisp_gaming";
  };
  const handleHome = () => {
    navigate("/whisp-gaming/Home");
  };
  return (
    <Grid
      container
      
      sx={{
        display:"flex",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          mt: 6,
        }}
      >
        <Box
          component="img"
          src={wgLogo}
          alt="Description"
          sx={{
            width: "256px",
            height: "auto",
            borderRadius: 2, // Example of adding rounded corners
            ml:'auto',
            mr:'auto',
            cursor:'pointer'
          }}
          onClick={()=>{
            handleLink();
          }}
        />

        <Typography variant="h1">Whisp Gaming</Typography>
        <Button
          onClick={() => {
            handleHome();
          }}
        >
          Home Page
        </Button>
      </Grid>
    </Grid>
  );
};

export default Construction;
