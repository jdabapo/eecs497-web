import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';


import { getAuth } from 'firebase/auth';
import { app, db } from './FirebaseApp';
import Button from '@mui/material/Button';
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

// const profile = {
//   name: "Tom Qin",
//   year: "Grad",
//   ethnicity: "East Asian",
//   language: "Japanese",
//   img: "https://media-exp1.licdn.com/dms/image/C5603AQFFJWPKmV81Sg/profile-displayphoto-shrink_400_400/0/1600595038316?e=1672876800&v=beta&t=J127g_aglU7GRKYsutKuD9NRw194Vc1ICnoJsoV_-W0",
//   email: "tom@umich.edu",
//   bio: "Hi, I'm Tom. I like croissants and ice creams"
// }

export default function Profile() {

  const [profile,setProfile] = useState({});
  const auth = getAuth(app);
  const [user, userLoading, userError] = useAuthState(auth);
  let navigate = useNavigate();

  useEffect(()=>{
    const fetchData = async() =>{
      const docRef = doc(db, "users", user.email);
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        // console.log(docSnap.data());
      }
      else{
        console.log('warning');
      }
      setProfile(docSnap.data());
    }
    if(!userLoading){
      fetchData();
    }
  },[userLoading]);

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
                {profile.picture && <CardMedia
                  component="img"
                  sx={{
                    height: '100%'
                  }}
                  src={require("../assets/" + profile.picture)}
                  alt={"Default profile"}
                />}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {profile.name}
                  </Typography>
                  <Chip icon={<SchoolIcon fontSize='small' />} label={profile.year} sx={{ mt: 0.5, mr: 0.5 }} />
                  <Chip icon={<PublicIcon fontSize='small' />} label={profile.ethnicity} sx={{ mt: 0.5, mr: 0.5 }} />
                  <Chip icon={<RecordVoiceOverIcon fontSize='small' />} label={profile.language} sx={{ mt: 0.5, mr: 0.5 }} />
                  <Typography>
                    {profile.description}
                  </Typography>
                </CardContent>
              </Card>
              <Button
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate("/edit")}
              >
                Edit Profile
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}



