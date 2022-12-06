import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, setDoc, getDoc, onSnapshot, collection, updateDoc, arrayRemove, arrayUnion, addDoc } from 'firebase/firestore';
import {app, db} from './FirebaseApp';
const theme = createTheme();

export default function FormPropsTextFields() {
  let navigate = useNavigate();
  //const auth = getAuth(app);
  const [name,setName] = useState();
  const [gradeLevel,setGradeLevel] = useState();
  const [race,setRace] = useState();
  const [lang,setLang] = useState();
  const [desc,setDesc] = useState();

  async function handleSubmit(event){
    event.preventDefault();
    if(name === null || gradeLevel === null || race === null || lang === null || desc === null){
      console.log('warning');
    }
    else{
      console.log('submitting');
      const toSubmit = {
        name:name,
        grade_level:gradeLevel,
        ethnicity:race,
        pref_language:lang,
        description:desc
      }
      console.log(toSubmit);
      await setDoc(doc(db,'users',name),toSubmit);
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
