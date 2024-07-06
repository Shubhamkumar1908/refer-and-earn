import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import ReferModal from './ReferModal';


const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container  maxWidth="md" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Typography variant="h3"  color="red" gutterBottom>
        Refer & Earn
      </Typography>
      <Typography variant="h6" color="green" gutterBottom>
        Refer a course to your friends and earn rewards!
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Refer Now
      </Button>
      <ReferModal open={open} handleClose={handleClose} />
    </Container>

  );
};

export default App;
