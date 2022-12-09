import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';

import { getAuth } from "firebase/auth";
import { app, db } from "./FirebaseApp.js"
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { doc, getDoc } from 'firebase/firestore';

const auth = getAuth(app);

const SignUp3 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);

  const validateEmailAndPassword = async (email, password) =>{
    // if email in db already
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    console.log("sign up fetch")
    
    if (docSnap().exists()){
      throw new Error('account already exists')
    }
  }

  
  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      validateEmailAndPassword(email,password);
      createUserWithEmailAndPassword(email, password);
      navigate("/create");
    }
    catch (error){
      alert(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.user.displayName}</p>
      </div>
    );
  }
  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 2 }}
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            helperText="Must use a university (.edu) email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            helperText="Password must be at least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
          />
          {(email.slice(-4) !== ".edu" || password.length < 6) ?
          <Button
            type="submit"
            disabled
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={e => handleSubmit(e)}
          >
            Next
          </Button>
          : <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={e => handleSubmit(e)}
        >
          Next
        </Button>}
          <Link href="/" variant="body2">
            {"Have an account? Sign In"}
          </Link>
        </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp3;
