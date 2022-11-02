import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card'
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import default_pic from "../assets/default_profile";
import pic from "./default_profile.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Footer from "./Footer"
import Header from "./Header"

const theme = createTheme();

function EditButton() {
  return (
    <CardActions className='buttons'>
      <Button variant="contained">Edit Profile</Button>
    </CardActions>
  );
}

export default function Profile() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
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
                  image={pic}
                  alt={"Default profile"}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Name
                  </Typography>
                  <Typography>
                    {/* maybe we should have card class that keeps track of the values
                      below */}
                    <p>Email : </p>
                    <p>Description : </p>
                  </Typography>
                </CardContent>
                <Container>
                  <EditButton />
                </Container>
              </Card>
            </Stack>
          </Container>
        </Box>
      </main>
      <Footer />
    </ThemeProvider>
  );
}



