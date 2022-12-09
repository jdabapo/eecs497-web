import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

// import SignUp from "./SignUp";
import Login from "./Login";
import SignUp3 from "./SignUp3";
import Main from "./Main";
import Profile from "./Profile";
import Create from "./Create";
import Edit from "./Edit";
import Header from "./Header";
import Footer from "./Footer";
import {app} from "./FirebaseApp";

const theme = createTheme();
const auth = getAuth(app);

export default function App() {
  const [user] = useAuthState(auth);
  
  // TODO: fix this so it shows different routes
  if (user){
    return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header/>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<SignUp3 />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </BrowserRouter>
    );
  } else {
    return (
      
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp3 />} />
        </Routes>
        <Footer />
    </ThemeProvider>
  </BrowserRouter>
    )
  }
}
