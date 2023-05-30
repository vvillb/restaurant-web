import { Grid, Link } from '@mui/material'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
  return (
    <Grid container
    justifyContent='center'
     sx={{
      backgroundColor:'background.pink'
    }}>
      <Grid item >
        <Link component={RouterLink} to='https://www.instagram.com/virbakes/'><InstagramIcon sx={{color:'highlights.blue'}}/></Link>
      </Grid>
      
    </Grid>
   
  )
}

export default Footer

