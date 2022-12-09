import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { doc, deleteDoc } from "firebase/firestore";
import { app, db } from './FirebaseApp';
import { useNavigate } from 'react-router-dom';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function DeleteModal(email) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let navigate = useNavigate();

  async function handleDelete(email){
    try{
      await deleteDoc(doc(db, "users", email));
      navigate("/sign-up");
    }
    catch (error){
      console.log(error);
    }
  }

  return (
    <div>
        <Button
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        color="error"
        onClick={handleOpen}
        >
        Delete Profile
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            You are about to permanently delete your account!
          </Typography>
          <Button
            
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="error"
            onClick={handleDelete}
            >
                Delete account
            </Button>
            <Button
            
            variant="contained"
            sx={{ mt: 3, mb: 2, ml: 2 }}
            color="primary"
            onClick={handleClose}
            >
            Cancel
            </Button>
        </Box>
      </Modal>
    </div>
  );
}
