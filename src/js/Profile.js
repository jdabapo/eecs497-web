import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
// import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
// import default_pic from "../assets/default_profile";


import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import HalfRating from "./Rating.js";

const theme = createTheme();

// function EditButton() {
//   return (
//     // <CardActions className='buttons'>
//     //   <Button variant="contained">Edit Profile</Button>
//     // </CardActions>
//   );
// }

export default function Profile() {
  const profile = {
    name: "Tom Qin",
    year: "Grad",
    ethnicity: "East Asian",
    language: "Japanese",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFFJWPKmV81Sg/profile-displayphoto-shrink_400_400/0/1600595038316?e=1672876800&v=beta&t=J127g_aglU7GRKYsutKuD9NRw194Vc1ICnoJsoV_-W0",
    email: "tom@umich.edu",
    bio: "Hi, I'm Tom. I like croissants and ice creams"
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Stack
              sx={{ pt: 4 }}
              spacing={2}
              justifyContent="center"
            >
              <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    height: '100%'
                  }}
                  image={profile.img}
                  alt={"Default profile"}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {profile.name}
                  </Typography>
                  <Typography>
                    {/* maybe we should have card class that keeps track of the values
                      below */}
                    <Chip icon={<SchoolIcon fontSize='small' />} label={profile.year} sx={{ mt: 0.5, mr: 0.5 }} />
                    <Chip icon={<PublicIcon fontSize='small' />} label={profile.ethnicity} sx={{ mt: 0.5, mr: 0.5 }} />
                    <Chip icon={<RecordVoiceOverIcon fontSize='small' />} label={profile.language} sx={{ mt: 0.5, mr: 0.5 }} />
                    <p>Email : {profile.email}</p>
                    <p>Bio : {profile.bio}</p>
                  </Typography>
                </CardContent>
                <Container>
                  {/* <EditButton /> */}
                </Container>
              </Card>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}



