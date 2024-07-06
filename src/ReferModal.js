import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const ReferModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6"  color="red" gutterBottom>
          Refer a Friend
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{ mb: 2 }}
            label="Your Name"
            name="referrerName"
            fullWidth
            required
            value={formData.referrerName}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Your Email"
            name="referrerEmail"
            fullWidth
            required
            type="email"
            value={formData.referrerEmail}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Friend's Name"
            name="refereeName"
            fullWidth
            required
            value={formData.refereeName}
            onChange={handleChange}
          />
          <TextField
            sx={{ mb: 2 }}
            label="Friend's Email"
            name="refereeEmail"
            fullWidth
            required
            type="email"
            value={formData.refereeEmail}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferModal;
