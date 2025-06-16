import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Outlet, Link } from "react-router-dom";


export default function Layout() {
  
    return (
      <Box>
        <Outlet />
        <Copyright />
      </Box>
    );
  }

  function Copyright() {
    return (
      <Box sx={{my: '10px' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="https://RouxCubing.com/">
          RouxCubing.com
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
      </Box>
    );
  }
  