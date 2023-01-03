import React, { useState, useContext } from 'react';
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
import { BrowserRouter as Router, Routes, Route, Link as Linkk } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, provider } from '../firebase-config'
import { useNavigate } from 'react-router-dom';

import UserContext from "../../src/context/UserContext";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Torrents.App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#009688',
      main: '#00838f',
      dark: '#4dd0e1',
      contrastText: '#fff',
    },
    secondary: {
      light: 'red',
      main: 'red',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function SignUp() {

  const { setIsAuth } = useContext(UserContext);

  const [error, setError] = useState("")

  let navigate = useNavigate();



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      email: data.get('email'),
      password: data.get('password'),
    });

    if (data.get('firstName') && data.get('email') && data.get('password')) {
      //crea nuevo usuario...
      createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
        .then(() =>  //modifica el nombre
          updateProfile(auth.currentUser, {
            displayName: data.get('firstName'),
          })
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem('isAuth', true);
          setIsAuth(true);
          localStorage.setItem('currentUser', auth.currentUser.displayName);
          navigate('/');
        })
        .catch((err) => setError(err.message));
    }
  };



return (
  <ThemeProvider theme={theme}>
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
        <Avatar sx={{ m: 1, bgcolor: '#00838f' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
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
            {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid> */}
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

          </Grid>
          <Button onSubmit={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Linkk to="/login" variant="body2">
                Already have an account? Sign in
              </Linkk>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
);
}
