import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import '../css/post.css';
import '../assets/storyboards.jpg';

export default function Post({card}){

  console.log("../assets/" + card.picture)

  return(
    <Grid item key={card} xs={12} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {card.picture && <CardMedia
        component="img"
        sx={{
          height: '200px'
        }}
        src={require("../assets/" + card.picture)}
        alt={card.name}
      />}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.name}
        </Typography>
        {/* maybe we should have card class that keeps track of the values
          below */}
        <Chip icon={<SchoolIcon fontSize='small' />} label={card.grade_level} sx={{ mt: 0.5, mr: 0.5 }} />
        <Chip icon={<PublicIcon fontSize='small' />} label={card.ethnicity} sx={{ mt: 0.5, mr: 0.5 }} />
        <Chip icon={<RecordVoiceOverIcon fontSize='small' />} label={card.pref_language} sx={{ mt: 0.5, mr: 0.5 }} />
        <Typography>
          {card.description}
        </Typography>
      </CardContent>
      <CardActions className='buttons'>
        <Button size="small" onClick={() => {
          navigator.clipboard.writeText(card.email);
          alert("Copied " + card.email + " to clipboard!");
        }}>Email me</Button>
        {/* <Button size="small">Add to favorites</Button> */}
      </CardActions>
    </Card>
  </Grid>
  )
}

