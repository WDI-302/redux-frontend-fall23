import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useSelector, useDispatch} from 'react-redux'
import { register } from '../redux/userSlice';

// theme is in theme.jsx
// const defaultTheme = createTheme();

export default function Register() {

    const user = useSelector( state => state.user)
    const dispatch = useDispatch()

    // const [isValid, setIsValid] = useState({
    //   
    // })

    const [pwdMatch, setPwdMatch] = useState({
        error: false,
        message: ""
    })





  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userObj = {
        firstname: data.get('firstName'),
        lastname: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password')
      }
    console.log('____userObj____')
    console.log(userObj);

    if (userObj.password !== data.get('confirm-password')) {
        setPwdMatch({
            error: true,
            message: "Password doesn't Match!"
        })
    } else {
        setPwdMatch({
            error: false,
            message: ""
        })

    }

    (userObj.password === data.get('confirm-password')) && dispatch(register(userObj))
  };



  return (
    // ThemeProvider is in main.jsx
    // <ThemeProvider theme={defaultTheme}>  
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  error={pwdMatch.error}
                  helperText={pwdMatch.message}
                />
              </Grid>
              
            </Grid>
            { user.status === 'rejected' && 
                <Typography
                    variant="h4"
                    sx={{
                        color: 'red',
                        textAlign: 'center'
                    }}
                >{user.message}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Please Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    // </ThemeProvider>
  );
}