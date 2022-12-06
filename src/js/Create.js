import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function FormPropsTextFields() {
  let navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/main");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          component="form"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& .MuiTextField-root': { m: 1, width: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div
            style={{
              // marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              placeholder="Jane Doe"
            />
            <TextField
              required
              id="outlined-required"
              label="Grade Level"
              placeholder="Freshman"
            />
            <TextField
              required
              id="outlined-required"
              label="Race"
              placeholder="East Asian"
            />
            <TextField
              required
              id="outlined-required"
              label="Preferred Language"
              placeholder="Japanese"
            />
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Description"
              placeholder="Introduce yourself!" 
              multiline
              minRows={4}
            />
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={e => handleSubmit(e)}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
