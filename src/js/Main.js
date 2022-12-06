import { useState, useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Post from "./Post";
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import {app} from "./FirebaseApp.js"


const cards = [
  {
    name: "Santa Ono",
    year: "Freshman",
    ethnicity: "East Asian",
    language: "Japanese",
    img: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/10/gpb.NEW_.PresidentOnoInterview.10.18.22.088.jpg?resize=1200%2C800&ssl=1",
    about: "Looking for someone cool to room with during my first year at Michigan!"
  },
  {
    name: "Billy Magic",
    year: "Senior",
    ethnicity: "White",
    language: "English",
    img: "https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/09/Image-from-iOS-3.jpeg?resize=2048%2C1365&ssl=1",
    about: ""
  },
  {
    name: "Natalie Emcard",
    year: "Junior",
    ethnicity: "Black",
    language: "English",
    img: "https://pbs.twimg.com/profile_images/2997158888/96463b62bb6df4b35196b17af96dc578_400x400.jpeg"
  },
];

function Main(){
    const [value, loading, error] = useCollection(collection(getFirestore(app), 'users'));
    const [cards,setCards] = useState([]);
    // TODO: filters

    useEffect(()=>{
      if(error){
        console.log(error);
      }
      else if(loading === false){
        let tmp = []
        value.docs.map((doc) => (tmp.push(doc)));
        setCards(tmp);
      }
    },[loading,error]);
    
    return (
    <>
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
              Wolveroommates
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Find your ideal roommate here!
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {!loading ?
            <Grid container spacing={4}>
            {cards.map(card => (
              <Post key={card.name} card={card} />
            ))
            }
            </Grid>

            :
            <p>loading</p>
          }
        </Container>
      </>
    )
  };

export default Main;