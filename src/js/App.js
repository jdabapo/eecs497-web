import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { app } from "./FirebaseApp.js"

// import SignUp from "./SignUp";
import SignUp2 from "./SignUp2";
import Main from "./Main";
import Footer from "./Footer";

const theme = createTheme();
const auth = getAuth(app);

export default function App() {
  const [user] = useAuthState(auth);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AppBar position="relative">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" noWrap>
              Album layout
            </Typography>
            {user && <Button variant="contained" onClick={() => auth.signOut()}>Sign out</Button>}
          </Toolbar>
        </AppBar>

        {user ? <Main /> : <SignUp2 />}
        
        <Footer />
  </ThemeProvider>
  );
}