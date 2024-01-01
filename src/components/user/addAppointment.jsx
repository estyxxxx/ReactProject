import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Typography from '@mui/material/Typography';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Grid from '@mui/material/Grid';
import appointmentsData from '../../data/appointmentsData';

export default function AddAppointment(props) {
  const { SetAddAppointment, chooseService } = props;
  const [canAdd, SetCanAdd] = useState(true);
  const { control, register, handleSubmit, formState: { errors } } = useForm();

  function PostAppointment(formData) {
    formData.serviceType = chooseService;
    appointmentsData.addAppointment(formData, SetCanAdd, SetAddAppointment);
  }

  return (
    <Dialog open={true} onClose={() => SetAddAppointment(false)}>
      <DialogTitle>Add appointment</DialogTitle>
      <form onSubmit={handleSubmit(PostAppointment)}>
        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              control={control}
              name='dateTime'
              render={({ field }) => (
                <DateTimePicker {...register("dateTime", { required: true })}
                  label="Date & Time" margin="normal"
                  error={!!errors.dateTime || !canAdd}
                  sx={{ width: "100%" }}
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </LocalizationProvider>
          {errors.dateTime && (
            <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
              <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Date and time is a required field
            </Typography>
          ) || !canAdd && (
            <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
              <ErrorOutlineIcon sx={{ marginRight: "3px" }} />This time is not available. Choose another time.
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
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Id is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("clientName", { required: true })}
                label="ClientName" fullWidth margin="normal"
                error={!!errors.clientName}
                sx={{
                  '& label, & input': {
                    color: errors.clientName ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.clientName ? 'red' : 'inherit',
                  },
                }} />
              {errors.clientName && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Name is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("clientPhone", { required: true })}
                label="ClientPhone" fullWidth margin="normal"
                error={!!errors.clientPhone}
                sx={{
                  '& label, & input': {
                    color: errors.clientPhone ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.clientPhone ? 'red' : 'inherit',
                  },
                }} />
              {errors.clientPhone && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Phone is a required field
                </Typography>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField {...register("clientEmail", { required: true })}
                label="ClientEmail" fullWidth margin="normal"
                error={!!errors.clientEmail}
                sx={{
                  '& label, & input': {
                    color: errors.clientEmail ? 'red' : 'inherit',
                  },
                  '& .MuiOutlinedInput-root': {
                    borderColor: errors.clientEmail ? 'red' : 'inherit',
                  },
                }} />
              {errors.clientEmail && (
                <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
                  <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Email is a required field
                </Typography>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => SetAddAppointment(false)} color="error" variant="outlined" endIcon={<CancelOutlinedIcon />}>
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary" endIcon={<SendIcon />}>
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

