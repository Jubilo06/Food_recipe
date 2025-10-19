import {Stack,AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, } from "@mui/material";
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './logo.module.css'
import MenuIcon from '@mui/icons-material/Menu';

function Nav(){
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // --- Handlers for the Mobile Menu ---
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (path) => {
    handleMenuClose();
    navigate(path);
  };
    return(
        <AppBar className={styles.navbar} sx={{backgroundColor:"#391300"}}>
            <Toolbar>
                <Typography component={Link} sx={{fontWeight:900, fontSize:{xs:"25px", sm:'20px', color:'white', flexGrow:1, textDecoration: 'none'}}}> CIROC KITCHEN</Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Stack direction='row' spacing={{xs:2, sm:5}}>
                            <Link  style={{textDecoration:'none', textTransform:'capitalize', color:'white', fontSize:'25px', fontWeight:700}} to='/'>Home</Link>
                            <Link  style={{textDecoration:'none',color:'white', fontSize:'25px', fontWeight:700}}>About us</Link>
                            <Link  style={{textDecoration:'none', color:'white', fontSize:'25px', fontWeight:700}}>Contact</Link>
                        </Stack>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="#ffffff"
          >
            <MenuIcon htmlColor="white" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem  key="home" onClick={() => handleNavigate('/')}>Home</MenuItem>,
            <MenuItem  key="about" onClick={() => handleNavigate('/about')}>About us</MenuItem>,
            <MenuItem  key="contact" onClick={() => handleNavigate('/contact')}>Contact us</MenuItem>
          </Menu>
        </Box>
                
            </Toolbar>
        </AppBar>
    )
}
export default Nav;