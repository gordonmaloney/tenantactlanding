import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FullList } from './FullList';


const sections = ['Pricing', 'Blog'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (nextOpen) => (event) => {
    // ignore tab/shift to prevent focus loss
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(nextOpen);
  };



  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation"       onClick={toggleDrawer(false)}
	onKeyDown={toggleDrawer(false)}>
		<h3 style={{padding: '0 16px'}}>All products</h3>
		<Divider />
      <List>
        {FullList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 			 	href={item.link} 
			target="_blank"
			>
              <ListItemText 
			  primary={item.title} secondary={item.desc} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed"
	
	sx={{
		backgroundColor: 'rgb(9, 124, 53)',    // pick any CSS color
		color: 'white',              // icon/text color
		boxShadow: 4,                  // MUI shadow level (0–24)
		//borderBottom: '2px solid #FF4081',
    zIndex: 50
	  }}
	>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
			  flexGrow: 1,
              fontFamily: 'Bebas Neue',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TenantAct
          </Typography>

               <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontFamily: 'Bebas Neue',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            TenantAct
          </Typography>
		  


          <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' } }}>


		  <Button                  sx={{ my: 2, color: 'white', display: 'block' }}
 onClick={toggleDrawer(true)}>Products</Button>
  <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}

      >
        {DrawerList}
      </SwipeableDrawer>



            {sections.map((section) => (
              <Button
                key={section}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {section}
              </Button>
            ))}
          </Box>


      
		  <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >		
			                <MenuItem key={'Products'} onClick={handleCloseNavMenu}>

			  <Typography sx={{ textAlign: 'center' }}
			onClick={toggleDrawer(true)}>Products</Typography>
                </MenuItem>


              {sections.map((section) => (
                <MenuItem key={section} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{section}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;