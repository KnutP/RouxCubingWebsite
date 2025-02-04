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
             <Link className="nav-link" to="/">RouxCubing.com</Link>
          </Typography>
      <Divider />
      <List>
        <ListItem key={'home'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/">Home</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'rouxtorials'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/rouxtorials">Rouxtorials</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'rouxsources'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/rouxsources">Rouxsources</Link>
          </ListItemButton>
        </ListItem>
        <ListItem key={'roadmap'} disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <Link className="nav-link" to="/roadmap">Roadmap to Sub-X</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <Icon sx={{ fontSize: 50, mr: '5px', display: 'flex'}}>
            <img src={require("../img/cmll.png")} style={{ width: '100%'}} />
          </Icon>
          <Typography variant="h6" component="div"
             sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
             <Link className="nav-link" to="/">RouxCubing.com</Link>
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
               <Link className="nav-link" to="/">Home</Link>
             </Button>
             <Button key={'rouxtorials'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/rouxtorials">Rouxtorials</Link>
             </Button>
             <Button key={'rouxsources'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/rouxsources">Rouxsources</Link>
             </Button>
             <Button key={'roadmap'} sx={{ color: '#fff' }} size="large">
               <Link className="nav-link" to="/roadmap">Roadmap to Sub-X</Link>
             </Button>
           </Box>

        </Toolbar>
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
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}
