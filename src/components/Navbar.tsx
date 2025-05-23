import * as React from 'react';
import { Icon, List, ListItem, ListItemButton, Box, Button, Toolbar, AppBar} from "@mui/material";
import { Link } from "react-router-dom";
import { Typography, CssBaseline, Divider, Drawer, IconButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="div"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
             <Link className="nav-link" to="/" style={{textDecoration: "none", color: "white"}}>RouxCubing.com</Link>
          </Typography>
      <Divider />
      <List>
        <ListItem key={'home'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'rouxtorials'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/rouxtorials" style={{textDecoration: "none", color: "white"}}>Rouxtorials</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'rouxsources'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/rouxsources" style={{textDecoration: "none", color: "white"}}>Rouxsources</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'rouxdmap'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/rouxdmap" style={{textDecoration: "none", color: "white"}}>Roadmap to Sub-X</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky" >
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Toolbar sx={{ width: '100%', maxWidth:'1440px'}}>
          <Icon sx={{ fontSize: 50, mr: '5px', display: 'flex'}}>
            <img src={require("../img/cmll.png")} style={{ width: '100%'}} />
          </Icon>
          <Typography variant="h6" component="div"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
             <Link className="nav-link" to="/" style={{textDecoration: "none", color: "white"}}>RouxCubing.com</Link>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, marginLeft: "auto" }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
             <Button key={'home'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/" style={{textDecoration: "none", color: "white"}}>Home</Link>
             </Button>
             <Button key={'rouxtorials'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/rouxtorials" style={{textDecoration: "none", color: "white"}}>Rouxtorials</Link>
             </Button>
             <Button key={'rouxsources'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/rouxsources" style={{textDecoration: "none", color: "white"}}>Rouxsources</Link>
             </Button>
             <Button key={'rouxdmap'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/rouxdmap" style={{textDecoration: "none", color: "white"}}>Rouxdmap to Sub-X</Link>
             </Button>
           </Box>

        </Toolbar>
        </Box>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          anchor='right'
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              width: drawerWidth,
              maxWidth: '100vw',
            },
          }}
          sx={{
            display: mobileOpen ? { xs: 'block', sm: 'none' } : 'none',
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}
