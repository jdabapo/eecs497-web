import React, { useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { app } from "./FirebaseApp.js"

// import SignUp from "./SignUp";
import Login from "./Login";
import SignUp3 from './SignUp3.js';
import Main from "./Main";
import Footer from "./Footer";

const theme = createTheme();
const auth = getAuth(app);

export default function App() {
  const [user] = useAuthState(auth);
  const [exists, setExists] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        

        {user ? <Main />
        : exists ? <Login setExists={setExists} /> : <SignUp3 setExists={setExists} />}
        
        <Footer />
  </ThemeProvider>
  );
}
