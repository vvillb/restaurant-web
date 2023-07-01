import { Button, Grid, Link, Typography } from '@mui/material'
import {Link as RouterLink} from 'react-router-dom'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactSection = () => {
  return (
    <Grid container xs={12} display='flex' flexDirection='column' justifyContent='center' alignItems='center' padding='10%'>
    <Typography variant='h3'>
       ¿Qué te apetece? Hablemos!
    </Typography>
    
        <Typography variant='h5'>                
        Escríbeme por whatsapp o envíame un mensaje directo a través de instagram
        </Typography>
        <Grid item display='flex' flexDirection='row' >
          <Grid item sx={{margin:'5%'}} >
            <Link component={RouterLink} to='https://wa.me/34687095451'>
          <Button variant='contained' >
             <WhatsAppIcon />
          </Button>               
        </Link>
          </Grid>
          <Grid item sx={{margin:'5%'}}>
            <Link component={RouterLink} to='https://www.instagram.com/virbakes/'>
          <Button variant='contained'  >
           <InstagramIcon />
          </Button>
        </Link>
            </Grid>
   
        
    </Grid>
      
  </Grid>
  )
}

export default ContactSection
