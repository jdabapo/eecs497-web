import React, { useEffect, useState } from 'react';
import { useNavigate, useRoutes } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { app } from "./FirebaseApp.js"
import { AlertTitle } from '@mui/material';
import { Alert } from '@mui/material';

const theme = createTheme();

const auth = getAuth(app);

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInStatusError, setSignInStatusError] = useState(false);

  const [
    signInWithEmailAndPassword,
    user,
    userLoading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorCode = '';
  if (error !== undefined) {
    errorCode = error.code;
  }

  let navigate = useNavigate();

  // console.log({
  //   "user": user,
  //   "error": error,
  // });

  // let x = false;
  // if (error && (error.code === "auth/invalid-email")) {
  //   x = true;
  // }

  // console.log({
  //   "equal error ": x,
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      email: email,
      password: password,
    });

    // TODO : userCredential keeps returning null even iglogged in with the correct credentials
    // the other version was doiinig the same thing. it was not catching the wrong password/username errors
    // it's why we kept getting redirected to main in the url trying to sign in with the incorret credentials
    // not sure how to access userCredential.user.email. it seems like it should be able to be accessed
    signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    if (user) {
      navigate("/main");
    } else if (error) {
      setSignInStatusError(true);
    }
  }, [error, navigate, user]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>

          {signInStatusError && <div><Alert variant="filled" severity="error">
            <AlertTitle>Error</AlertTitle>
            <pre>!wrong password and/or username!</pre>
            <pre>      !please try again!        </pre>
          </Alert></div>}

          <Box component="form" noValidate sx={{ mt: 1 }}>

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
            {/* <Link to="/main"> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={e => handleSubmit(e)}
            >
              Sign In
            </Button>
            <Grid container>
              <Link href="/sign-up" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider >
  );
};



export default SignIn;
