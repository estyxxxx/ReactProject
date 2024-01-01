import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import servicesData from '../../data/servicesData';

export default function AddService({ setAddService }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [canAdd, SetCanAdd] = useState(true);
  function PostService(formData) {
    servicesData.addService(formData, SetCanAdd, setAddService);
  }

  return (
    <Dialog open={true} onClose={() => setAddService(false)}>
      <DialogTitle>Add service</DialogTitle>
      <form onSubmit={handleSubmit(PostService)}>
        <DialogContent>
          <TextField {...register("name", { required: true })}
            label="Name" fullWidth margin="normal"
            error={!!errors.name || (!canAdd)}
            sx={{
              '& label, & input': {
                color: errors.name || (!canAdd) ? 'red' : 'inherit',
              },
              '& .MuiOutlinedInput-root': {
                borderColor: errors.name || (!canAdd) ? 'red' : 'inherit',
              },
            }} />
          {errors.name && (
            <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
              <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Name is a required field
            </Typography>
          ) || !canAdd && (
            <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
              <ErrorOutlineIcon sx={{ marginRight: "3px" }} />This service exists. Enter a unique name.
            </Typography>
          )}

          <Grid container spacing={2}>

            <Grid item xs={12} sm={6}>
              <TextField {...register("id", { required: true })}
                label="Id" fullWidth margin="normal"
                error={!!errors.id}
                sx={{
                  '& label, & input': {
                    color: errors.id ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.id ? 'red' : 'inherit',
                  },
                }} />
              {errors.id && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Id is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("description", { required: true })}
                label="Description" fullWidth margin="normal"
                error={!!errors.description}
                sx={{
                  '& label, & input': {
                    color: errors.description ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.description ? 'red' : 'inherit',
                  },
                }} />
              {errors.description && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Description is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("price", { required: true })}
                label="Price" fullWidth margin="normal"
                error={!!errors.price}
                sx={{
                  '& label, & input': {
                    color: errors.price ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.price ? 'red' : 'inherit',
                  },
                }} />
              {errors.price && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Price is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("duration", { required: true })}
                label="Duration" fullWidth margin="normal"
                error={!!errors.duration}
                sx={{
                  '& label, & input': {
                    color: errors.duration ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.duration ? 'red' : 'inherit',
                  },
                }} />
              {errors.duration && (
                <>
                  <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                    <ErrorOutlineIcon sx={{ marginRight: "3px" }} /> Duration is a required field
                  </Typography></>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddService(false)} color="error" variant="outlined" endIcon={<CancelOutlinedIcon />}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog >
  );
}