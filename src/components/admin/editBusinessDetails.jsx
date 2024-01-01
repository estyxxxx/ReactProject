import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import SendIcon from '@mui/icons-material/Send';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import businessData from '../../data/businessData';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const EditBusinessDetails = observer(({ SetEditOption }) => {
  const [name, setName] = useState(businessData.business.name);
  const [address, setAddress] = useState(businessData.business.address);
  const [phone, setPhone] = useState(businessData.business.phone);
  const [owner, setOwner] = useState(businessData.business.owner);
  const [logo, setLogo] = useState(businessData.business.logo);
  const [description, setDescription] = useState(businessData.business.description);

  function Update(e) {
    e.preventDefault();
    if (name && address && phone && owner && logo && description) {
      businessData.business.name = name;
      businessData.business.address = address;
      businessData.business.phone = phone;
      businessData.business.owner = owner;
      businessData.business.logo = logo;
      businessData.business.description = description;
      businessData.updateDetails();
      SetEditOption(false);
    }
  }

  return (
    <Dialog open={true} onClose={() => SetEditOption(false)}>
      <DialogTitle>Update details</DialogTitle>
      <form onSubmit={Update}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name" fullWidth margin="normal"
                value={name}
                error={!!!name}
                onChange={(e) => setName(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !name ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !name ? 'red' : 'inherit',
                  },
                }} />
              {!name && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Name is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Address" fullWidth margin="normal"
                value={address}
                error={!!!address}
                onChange={(e) => setAddress(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !address ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !address ? 'red' : 'inherit',
                  },
                }} />
              {!address && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Address is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone" fullWidth margin="normal"
                value={phone}
                error={!!!phone}
                onChange={(e) => setPhone(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !phone ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !phone ? 'red' : 'inherit',
                  },
                }} />
              {!phone && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Phone is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Owner" fullWidth margin="normal"
                value={owner}
                error={!!!owner}
                onChange={(e) => setOwner(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !owner ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !owner ? 'red' : 'inherit',
                  },
                }} />
              {!owner && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Owner is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Logo" fullWidth margin="normal"
                value={logo}
                error={!!!logo}
                onChange={(e) => setLogo(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !logo ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !logo ? 'red' : 'inherit',
                  },
                }} />
              {!logo && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Logo is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Description" fullWidth margin="normal"
                value={description}
                error={!!!description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{
                  '& label, & input': {
                    color: !description ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: !description ? 'red' : 'inherit',
                  },
                }} />
              {!description && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Description is a required field
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => SetEditOption(false)} color="error" variant="outlined" endIcon={<CancelOutlinedIcon />}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
});

export default EditBusinessDetails;
