import * as React from "react";
import {
  Button,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Card,
  Grid,
} from "@mui/material";
import WgData from "./assets/WG.json";

export default function RecipeReviewCard() {
  return (
    <>
      {WgData.players.map((player, index) => {
        const imagePath = `./public/${player.nickname}.png`;
        return (
          <Grid item xs={6} sm={8} md={4} >
            <Card key={index}>
              <CardHeader title={player.nickname} />
              <CardMedia
                component="img"
                image={imagePath}
                alt={player.nickname}
              />
              <CardContent>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {player.information}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }} disableSpacing>
                <Button>aaaa</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
