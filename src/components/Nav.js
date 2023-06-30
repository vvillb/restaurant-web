
import { AppBar, Box, Button, Drawer, Grid, IconButton, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { MenuOutlined } from '@mui/icons-material';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import CookieIcon from '@mui/icons-material/Cookie';

const navItems = [
  { id:1, title: 'home', path: '/' },
  { id:2, title: 'cajas', path: '/cajas' },
  { id:3, title: 'tartas', path: '/tartas' },
  { id:4, title: 'contacto', path: '/contact' },
  // {id:5, title:'pedidos', path:'/pedidos'}
  
];


function Nav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  const drawer = (
    <Grid sx={{ width: 250, backgroundColor:'background.pink' ,minHeight:'100vh'}}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link component={RouterLink} to={item.path} onClick={handleDrawerToggle} underline="none"
>
            <Button variant='nav'
            sx={{ 
              
              
              ':hover':{
                color:'highlights.green'
              }
             }
             
            } >
              <Button 
              sx={{
                
              }} />{item.title}
            </Button>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid>
  );

  return (
    <Grid container sx={{zIndex:9999}}>
    <Grid
    justifyContent='center'
    sx={{
      zIndex:1,
      backgroundColor:'highlights.green',
      maxWidth:'100vw', 
      position: 'fixed', left: 0, right: 0,top:0,
      color:'white',
      justifyContent:'center',
      alignContent:'top',
      height:'4vh',
      display:'grid'
    }}> 
    <Typography variant='h6'>hechos en casa con 🤍</Typography> 
    <Grid justifyContent="space-around" sx={{ flexGrow: 1 }}>
     


    </Grid>
       
        <AppBar   sx={{maxWidth:'100vw', position: 'fixed', left: 0, right: 0,top:'4vh',zIndex:9999}}>
          <Toolbar  sx={{textAlign:'left', justifyContent:'space-around',backgroundColor:'background.pink'}}>
            <IconButton
              size="large"
              edge="start"
              color="highlights.blue"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuOutlined />
            </IconButton>
            <Grid  container justifyContent='flex-start'
            >
            <Link to='/'  sx={{ flexGrow: 1 }} underline="none" component={RouterLink}
>
            <Button variant='string'
            sx={{
              ':hover':{
                color:'dark.main'
              }
            }}
            ><CookieIcon/>
             <Typography variant="h6"   sx={{textTransform:'none', flexGrow: 1 ,color:'highlights.blue',':hover':{color:'backgorund.main'}}}> 
              virbakes
            </Typography>
            </Button>
            
            </Link>
            </Grid>
            <Grid container sx={{ display: { xs: 'none', md: 'flex' }}}>
            <Grid sx={{ display:'flex', justifyContent:'flex-end', flexGrow:1}}>
              {navItems.map((item) => (
                <Link key={item.id} to={item.path} component={RouterLink} >
                <Button key={item.id} 
                sx={{
                  ':hover':{
                    color:'highlghts.green'
                  }
                }}>
                  {item.title}
                </Button>
                </Link>
              ))}
            </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
       
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          {drawer}
        </Drawer>
      </Grid></Grid>
  );
 };
 


export default Nav


//   return (
 
//       <Box sx={{ 
//         flexGrow: 1 ,
       
//       }}
//       >
//         <AppBar position="static"
//         sx={{
//           backgroundColor:'background.pink'
//         }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//             >
//               <MenuOutlined />
//             </IconButton>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color:'highlights'}}>
//               Virbakes
//             </Typography>
//             <Link component={RouterLink} to='/contact'><Button color="inherit">contacto</Button></Link>
//             <Link component={RouterLink} to='/products'><Button color="inherit">productos</Button></Link>
//             <Link component={RouterLink} to='/'><Button color="inherit">home</Button></Link>

            
            
            

//           </Toolbar>
//         </AppBar>
//       </Box>
   
//   )
// }


