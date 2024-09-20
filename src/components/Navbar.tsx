import * as React from 'react';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";


export default function Navbar() {
  
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
              
              <Link to="/">RouxCubing.com</Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Button key={'home'} sx={{ color: '#fff' }}>
                  <Link to="/">Home</Link>
                </Button>
                <Button key={'tutorial'} sx={{ color: '#fff' }}>
                  <Link to="/tutorial">Roux Tutorials</Link>
                </Button>
                <Button key={'rouxsources'} sx={{ color: '#fff' }}>
                  <Link to="/rouxsources">Rouxsources</Link>
                </Button>
                <Button key={'roadmap'} sx={{ color: '#fff' }}>
                  <Link to="/roadmap">Roadmap to Sub-X</Link>
                </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
