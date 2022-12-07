import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, setDoc } from 'firebase/firestore';
import {app, db} from './FirebaseApp';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';

const theme = createTheme();

export default function FormPropsTextFields() {
  let navigate = useNavigate();
  //const auth = getAuth(app);
  const [name,setName] = useState();
  const [gradeLevel,setGradeLevel] = useState();
  const [race,setRace] = useState();
  const [lang,setLang] = useState();
  const [desc,setDesc] = useState();
  const [pic, setPic] = useState('');
  const auth = getAuth(app);
  const [user] = useAuthState(auth);

  async function handleSubmit(event){
    event.preventDefault();
    if(pic === null){
      console.log('pic warning');
    }
    else{
      // console.log('submitting');
      const toSubmit = {
        name:name,
        grade_level:gradeLevel,
        ethnicity:race,
        pref_language:lang,
        description:desc,
        email:user.email,
        picture:pic
      }
      console.log(pic)
      // console.log(toSubmit);
      // console.log(user.email);
      await setDoc(doc(db, 'users', user.email), toSubmit);
      navigate("/main");
    }
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
          <Typography component="h1" variant="h5">
            Profile Information
          </Typography>
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
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Grade Level"
              placeholder="Freshman"
              value={gradeLevel}
              onChange={(e) => setGradeLevel(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Race"
              placeholder="East Asian"
              value={race}
              onChange={(e) => setRace(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Preferred Language"
              placeholder="Japanese"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            />
            <TextField
              required
              id="outlined-multiline-flexible"
              label="Description"
              placeholder="Introduce yourself!" 
              multiline
              minRows={4}
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <Button
              variant="contained"
              component="label"
              onChange={e => {
                const pic_name = e.target.value.substr(e.target.value.lastIndexOf("\\") + 1);
                console.log(e.target.value);
                console.log(pic_name);
                setPic(pic_name);
              }}
              >
              Upload Picture
              <input hidden accept="image/*" type="file" />
            </Button>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={e => handleSubmit(e)}
          >
            Save
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
