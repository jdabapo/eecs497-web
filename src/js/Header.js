import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { getAuth } from "firebase/auth";
import { app } from "./FirebaseApp.js"


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = getAuth(app);
export default function Header() {
  const [user] = useAuthState(auth);

    return(
    <AppBar position="relative">
        <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
            Roommate Finder
        </Typography>
        <Button href="./Profile.js" variant="contained">
            Edit
        </Button>
        {user && <Button variant="contained" onClick={() => auth.signOut()}>Sign out</Button>}
        </Toolbar>
    </AppBar>
    );
}