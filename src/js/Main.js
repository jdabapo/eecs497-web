import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Post from "./Post";
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import {app} from "./FirebaseApp.js"

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
        value.docs.map((doc) => (tmp.push(doc.data())));
        setCards(tmp);
      }
    }, [error, loading, value]);
    
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
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Find your ideal roommate here!
            </Typography>
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