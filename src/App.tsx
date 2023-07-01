import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AdvancedTechniqueTabs from './AdvancedTechniqueTabs';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://RouxCubing.com/">
        RouxCubing.com
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}


function CustomAppBar() {
  const navItems = ['Beginner Tutorial', 'Roux for CFOP Solvers', 'Advanced Techniques'];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            RouxCubing.com
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}



export default function App() {
  return (
      <Box>
        <CustomAppBar />
        <AdvancedTechniqueTabs />
        <Copyright />
      </Box>
  );
}
