import * as React from 'react';
import { Link, Icon, Box, Button, Toolbar, AppBar, Typography, CssBaseline } from "@mui/material";


export default function Navbar() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Icon sx={{ fontSize: 50, mr: '5px', display: 'flex'}}>
            <img src={require("../img/cmll.png")} style={{ width: '100%'}} />
          </Icon>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            <Link href="/">RouxCubing.com</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key={'home'} sx={{ color: '#fff' }}>
              <Link href="/">Home</Link>
            </Button>
            <Button key={'tutorial'} sx={{ color: '#fff' }}>
              <Link href="/tutorial">Rouxtorials</Link>
            </Button>
            <Button key={'rouxsources'} sx={{ color: '#fff' }}>
              <Link href="/rouxsources">Rouxsources</Link>
            </Button>
            <Button key={'roadmap'} sx={{ color: '#fff' }}>
              <Link href="/roadmap">Roadmap to Sub-X</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
