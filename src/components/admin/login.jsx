import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from '@mui/material/Typography';
import { IsConnected } from '../../App';

export default function Login() {
  const [OK, SetOK] = useState(true);
  const setIsConnected = useContext(IsConnected).setIsConnected;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function CheckPassword(formData) {
    fetch(`http://localhost:8787/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then((result) => {
      if (result.ok)
        setIsConnected(true);
      else {
        SetOK(false);
      }
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, minWidth: '32ch', width: "30vw" },
        marginTop: "18vh",
        marginBottom: "18vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(CheckPassword)}
    >
      <TextField {...register("name", { required: true })}
        label="User name" fullWidth margin="normal" variant="outlined"
        error={!!errors.name}
        sx={{
          '& label, & input': {
            color: errors.name ? 'red' : 'inherit',
          },
          '& .MuiOutlinedInput-root': {
            borderColor: errors.name ? 'red' : 'inherit',
          },
        }} />
      {errors.name && (
        <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
          <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Name is required field
        </Typography>
      )}
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel
          htmlFor="outlined-adornment-password"
          sx={{
            color: errors.password ? 'red' : 'inherit',
            '&.Mui-focused': {
              color: errors.password ? 'red' : 'inherit',
            },
          }}
        >
          Password
        </InputLabel>
        <OutlinedInput
          {...register("password", { required: true })}
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
          error={!!errors.password}
          sx={{
            '& label, & input': {
              color: errors.password ? 'red' : 'inherit',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: errors.password ? 'red' : 'inherit',
            },
          }}
        />
      </FormControl>

      {errors.password && (
        <Typography variant="body2" sx={{ color: "red", display: "flex", fontSize: "18px" }} gutterBottom>
          <ErrorOutlineIcon sx={{ marginRight: "3px" }} />Password is required field
        </Typography>
      )}
      {!OK && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Incorrect username or password.
      </Alert>
      }
      <Button type="submit" variant="contained"
        sx={{ ':hover': { backgroundColor: "grey", color: "white" }, backgroundColor: "#814a99" }}>
        Login
      </Button>
    </Box>
  )
}