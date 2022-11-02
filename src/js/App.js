import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import SignUp from "./SignUp";
import Login from "./Login";
import SignUp3 from './SignUp3.js';
import Main from "./Main";
import Profile from "./Profile.js";
import Header from './Header.js';
import Footer from "./Footer";

const theme = createTheme();

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />

          <Header/>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp3 />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
    </ThemeProvider>
  </BrowserRouter>
  );
}
