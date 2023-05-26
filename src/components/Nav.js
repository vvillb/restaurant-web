
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { MenuOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';



function Nav() {
  return (
 
      <Box sx={{ 
        flexGrow: 1 ,
       
      }}
      >
        <AppBar position="static"
        sx={{
          backgroundColor:'background.main'
        }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuOutlined />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'highlights.green'}}>
              Virbakes
            </Typography>
            <Link to='/contact'><Button color="inherit">contacto</Button></Link>
            <Button color="inherit">home</Button>
            
            

          </Toolbar>
        </AppBar>
      </Box>
   
  )
}

export default Nav
