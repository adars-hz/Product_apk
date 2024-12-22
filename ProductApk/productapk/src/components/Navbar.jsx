import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>PRODUCT MANAGEMENT</Typography>
        <Link to='/home'>
        <Button variant="contained">Home</Button> 
        </Link> &nbsp; &nbsp;
        <Link to='/addproduct'>
        <Button variant="contained">Add Product</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <br /><br />
  </Box></div>
  )
}

export default Navbar