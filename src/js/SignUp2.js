import { useState } from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { getAuth } from "firebase/auth";
import {app} from "./FirebaseApp.js"
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const auth = getAuth(app);


const SignUp2 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => signInWithGoogle()}
          >
            Sign In With Google
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default SignUp2;
