import { useState } from 'react';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

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
  
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password)

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
            Sign Up
          </Button>
          <Link href="" variant="body2" onClick={() => setExists(true)}>
            {"Have an account? Sign In"}
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp3;
