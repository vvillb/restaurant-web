import { Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import cajita from '../assets/images/cajas.jpg'
import tarta from '../assets/images/tartaDDL.jpg'

function Hero() {
  return (

  <Grid container >
    <Grid item xs={12} sm={6} 
   
     
    sx={{
     
      background:`url(${cajita})`,
      backgroundSize:'cover',       
      aspectRatio:1.25,
    }}>
      <Typography variant='h4'
      sx={{
        color:'background.pink',
        textShadow:'4px 4px 4px rgba(0,0,0,0.6)'
      }}>
        Disfrútalos a bocados
      </Typography>
      <Link >
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
      width:{xs:'100%',sm:'50%'}
     
    }}>
      fkhgysgfyi
    </Grid>
    </Grid>

  )
}

export default Hero


