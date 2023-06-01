import { Button, Grid, Link, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import React from 'react'
import cajita from '../assets/images/cajas.jpg'
import tarta from '../assets/images/tartaDDL.jpg'


function Hero() {
  return (

  <Grid container
  display='flex'
  justifyContent='center'
  alignContent='center'>
    <Grid item xs={12} sm={6} 
   
     
    sx={{
     
      background:`url(${cajita})`,
      backgroundSize:'cover',       
      aspectRatio:1.25,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}>
      <Typography variant='h4' xs={12} sm={6}
      sx={{
        color:'background.pink',
        textShadow:'4px 4px 4px rgba(0,0,0,0.6)',
        padding:'10%',
        
      }}>
        Disfrútalos a bocados
      </Typography>
      
      <Link component={RouterLink} to="/cajas"
      sx={{padding:'10%',
      }}>
        <Button variant='contained' sx={{
          
        }}>
          Ver cajas
        </Button>
      </Link>
      
    </Grid>
    <Grid item
    sx={{
      background:`url(${tarta})`,
      backgroundSize:'cover',
      aspectRatio:1.25,
      width:{xs:'100%',sm:'50%'},
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
     
    }}>
      <Typography variant='h4'
      sx={{
        color:'background.pink',
        textShadow:'4px 4px 4px rgba(0,0,0,0.6)',
        padding:'10%'
      }}>
        Para ocasiones epeciales
      </Typography>
      <Link component={RouterLink} to="/tartas"
      sx={{padding:'10%',
      }}>
        <Button variant='contained' sx={{
          
        }}>
          Ver tartas
        </Button>
      </Link>
    </Grid>
    </Grid>

  )
}

export default Hero


