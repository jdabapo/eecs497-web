import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import { getAuth } from "firebase/auth";
import {app} from "./FirebaseApp.js"
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';

const auth = getAuth(app);

const SignUp3 = ({setExists}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let navigate = useNavigate();
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)
    navigate("/main")
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
        <Box mt={8}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={e => handleSubmit(e)}
          >
            <Link to="/main">Sign Up</Link>
          </Button>
          <Link to="/sign-in" variant="body2">
            {"Have an account? Sign In"}
          </Link>
        </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp3;
