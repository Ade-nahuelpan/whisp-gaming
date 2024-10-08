import * as React from 'react';
import { Button, Typography, CardActions, CardContent, CardMedia, CardHeader, Card } from '@mui/material';
import WhispCard from './assets/whisp.png';
import WgData from './assets/WG.json'


export default function RecipeReviewCard() {
     const { nickname, characters, games, tournaments, information } = WgData.players;
  return (
    <>
    {WgData.players.map((player, index) =>(
    <Card key={index}>
      <CardHeader 
        title={player.nickname}
      />
      <CardMedia
        component="img"        
        image={WhispCard}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {player.information}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:'center'}} disableSpacing>
        <Button >aaaa</Button>
      </CardActions>
    </Card>
  ))}
  </>
  );
}
