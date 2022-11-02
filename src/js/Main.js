import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from './Header.js';
import Post from "./Post";

const cards = [
  {
    name: "Santa Ono",
    year: "Junior",
    ethnicity: "East Asian",
    language: "Japanese",
    img: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/10/gpb.NEW_.PresidentOnoInterview.10.18.22.088.jpg?resize=1200%2C800&ssl=1"
  },
  {
    name: "Billy Magic",
    year: "Senior",
    ethnicity: "White",
    language: "English",
    img: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/09/Image-from-iOS-3.jpeg?resize=2048%2C1365&ssl=1"
  },
  {
    name: "Natalie Emcard",
    year: "Freshman",
    ethnicity: "Black",
    language: "English",
    img: "https://pbs.twimg.com/profile_images/2997158888/96463b62bb6df4b35196b17af96dc578_400x400.jpeg"
  },
  {
    name: "Tom Qin",
    year: "Grad",
    ethnicity: "East Asian",
    language: "Japanese",
    img: "https://media-exp1.licdn.com/dms/image/C5603AQFFJWPKmV81Sg/profile-displayphoto-shrink_400_400/0/1600595038316?e=1672876800&v=beta&t=J127g_aglU7GRKYsutKuD9NRw194Vc1ICnoJsoV_-W0"
  }
];

const Main = () => (
  <main>
    <Header/>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Album layout
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below;its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(card => (
            <Post card={card} />
          ))}
        </Grid>
      </Container>
    </main>
);

export default Main;