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

const Post = ({card}) => (
  <Grid item key={card} xs={12} sm={6} md={4}>
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        sx={{
          height: '200px'
        }}
        image={card.img}
        alt={card.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {card.name}
        </Typography>
        {/* maybe we should have card class that keeps track of the values
          below */}
        <Chip icon={<SchoolIcon fontSize='small' />} label={card.year} sx={{ mt: 0.5, mr: 0.5 }} />
        <Chip icon={<PublicIcon fontSize='small' />} label={card.ethnicity} sx={{ mt: 0.5, mr: 0.5 }} />
        <Chip icon={<RecordVoiceOverIcon fontSize='small' />} label={card.language} sx={{ mt: 0.5, mr: 0.5 }} />
        <Typography>
          {card.about}
        </Typography>
      </CardContent>
      <CardActions className='buttons'>
        <Button size="small">Contact me</Button>
        {/* <Button size="small">Add to favorites</Button> */}
      </CardActions>
    </Card>
  </Grid>
);

export default Post;
